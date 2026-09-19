import { NextResponse } from "next/server";

interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

interface OrderPayload {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  note?: string;
  items: OrderItem[];
  total: number;
}

export async function POST(request: Request) {
  let payload: OrderPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Virheellinen pyyntö." }, { status: 400 });
  }

  const { orderNumber, customerName, customerPhone, note, items, total } = payload;

  if (!customerName || !customerPhone || !items || items.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Nimi, puhelinnumero ja tuotteet vaaditaan." },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const itemLines = items
    .map((i) => `• ${i.name} x${i.quantity} — ${i.price}`)
    .join("\n");

  const message = [
    `☕ *Uusi ennakkotilaus — ${orderNumber}*`,
    "",
    `👤 ${customerName}`,
    `📞 ${customerPhone}`,
    note ? `📝 ${note}` : null,
    "",
    itemLines,
    "",
    `💶 Yhteensä: ${total.toFixed(2)} €`,
  ]
    .filter(Boolean)
    .join("\n");

  // Without Telegram credentials configured, we still accept the order so the
  // site keeps working end-to-end in development — but nothing is actually
  // delivered anywhere yet. See TELEGRAM_SETUP.md.
  if (!botToken || !chatId) {
    console.warn(
      "[order] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID puuttuu .env.local:sta — tilaus ei mennyt Telegramiin. Katso TELEGRAM_SETUP.md."
    );
    console.log("[order] Tilaus (ei lähetetty):\n" + message);
    return NextResponse.json({ ok: true, delivered: false, orderNumber });
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[order] Telegram API error:", errBody);
      return NextResponse.json(
        { ok: false, error: "Tilaus vastaanotettu, mutta ilmoitus kahvilalle epäonnistui." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true, orderNumber });
  } catch (err) {
    console.error("[order] Telegram request failed:", err);
    return NextResponse.json(
      { ok: false, error: "Tilaus vastaanotettu, mutta ilmoitus kahvilalle epäonnistui." },
      { status: 502 }
    );
  }
}
