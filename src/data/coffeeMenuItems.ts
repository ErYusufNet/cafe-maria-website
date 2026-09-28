import { ProductDetail } from "@/context/ProductModalContext";

export const coffeeItems: ProductDetail[] = [
  {
    id: 801,
    name: "Karamelli Frappuccino",
    subtitle: "Sekoitettu täydellisyys",
    description:
      "Tunnusomainen voinen karamellisiirappimme sekoitettuna kahviin, maitoon ja jäähän. Viimeistelty kermavaahdolla.",
    longDescription:
      "Runsas ja jäähdyttävä frappuccino, jossa kohtaavat pehmeä karamellisiirappi, tuore kahvi ja täyteläinen maito — tehosekoitettuna silkkisen sileäksi. Viimeistelty pehmeällä kermavaahdolla ja karamellikastikkeella. Täydellinen valinta lämpimään päivään tai pieneen herkutteluhetkeen.",
    price: "5.90 €",
    image: "/images/coffee/menu_frap_highres.jpg",
    tags: ["Kylmä", "Makea", "Suosikki"],
  },
  {
    id: 802,
    name: "Karamelli Macchiato",
    subtitle: "Taidokkaasti kerrostettu",
    description:
      "Tuoreena höyrytetty maito vaniljasiirapilla, merkitty espressolla ja viimeistelty karamellikastikkeella.",
    longDescription:
      "Kauniisti kerrostettu klassikko: vaniljalla maustettu höyrytetty maito, päälle merkitty vahva espresso ja lopuksi pehmeä karamellikastikkeen kiehkura. Tasapainoinen yhdistelmä makeutta ja espresson syvyyttä kupissa, joka miellyttää silmää yhtä paljon kuin makuaistia.",
    price: "5.40 €",
    image: "/images/coffee/menu_custom_2.jpg",
    tags: ["Kerrostettu", "Makea"],
  },
  {
    id: 803,
    name: "Kurpitsakahvi Latte",
    subtitle: "Kauden suosikki",
    description:
      "Oma espressomme ja höyrytetty maito yhdistettynä kurpitsan ja kanelin rakastettuun makuparivaljakkoon.",
    longDescription:
      "Syksyn lämpöä kupissa — täyteläinen espresso ja silkkisen pehmeä höyrytetty maito yhdistyvät kurpitsan ja kanelin lämpimään makuun. Kausiluontoinen suosikki, joka tuo mukavuutta jokaiseen kulaukseen.",
    price: "5.65 €",
    image: "/images/coffee/menu_custom_3.jpg",
    tags: ["Kausituote", "Lämmin"],
  },
  {
    id: 804,
    name: "Nitro Cold Brew",
    subtitle: "Samettinen kaato",
    description:
      "Pienen erän kylmäuutettu kahvimme typellä käsiteltynä — luonnollisen makea maku ja laskeutuva kerma.",
    longDescription:
      "Hitaasti, kylmällä vedellä uutettu pienen erän kahvimme, typellä käsiteltynä samettisen, laskeutuvan kermaisen rakenteen aikaansaamiseksi. Luonnostaan makea ja pehmeä, ilman lisättyä sokeria — raikas valinta erityisesti lämpimänä päivänä.",
    price: "4.95 €",
    image: "/images/coffee/menu_nitro.jpg",
    tags: ["Kylmä", "Raikas"],
  },
  {
    id: 805,
    name: "Café Marian Flat White",
    subtitle: "Rohkea ja pehmeä",
    description:
      "Pehmeät ristretto-espressoannokset ja täydellisesti höyrytetty täysmaito luovat rohkean, samettisen lopputuloksen.",
    longDescription:
      "Talon oma tulkinta flat whitesta: tiiviit ristretto-espressoannokset ja huolella höyrytetty täysmaito luovat rohkean mutta samettisen pehmeän kupillisen. Pieni kuppi, suuri maku — täydellinen valinta, kun kaipaat jotain vahvaa mutta tasapainoista.",
    price: "5.15 €",
    image: "/images/coffee/menu_custom_5.jpg",
    tags: ["Vahva", "Klassikko"],
  },
];
