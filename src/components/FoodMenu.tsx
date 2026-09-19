"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useCart } from "@/context/CartContext";
import { useProductModal, ProductDetail } from "@/context/ProductModalContext";

const savoryItems: ProductDetail[] = [
  {
    id: 950,
    name: "Grillattu kana-wrap",
    subtitle: "Ruokalista",
    description: "Rapea tortilla, mehevä grillikana, tuore korianteri ja punasipuli, chili-majoneesi.",
    longDescription:
      "Täysjyvätortillaan käärimme mehukkaan, marinoidun grillikanan yhdessä tuoreen korianterin, rapean punasipulin ja mausteisen chili-majoneesin kanssa. Wrap paistetaan kevyesti, jotta pinta saa kevyen rapeuden — täydellinen valinta nopeaan mutta täyttävään välipalaan kupin kylkeen.",
    price: "8.90 €",
    image: "/images/foods/food_wrap.jpg",
    tags: ["Proteiinipitoinen", "Suosikki", "Nopea"],
  },
  {
    id: 951,
    name: "Kinkku-juustopaahtoleipä",
    subtitle: "Ruokalista",
    description: "Kolmikerroksinen paahtoleipä, kinkku, sulava juusto, tuore rosmariini.",
    longDescription:
      "Runsaasti täytetty paahtoleipä, jossa mehevä kinkku ja sulava juusto yhdistyvät rapean, voissa paistetun leivän kanssa. Viimeistelty tuoreella rosmariinilla — klassikko, joka lämmittää nopeasti mutta maistuu kuin kotikeittiöstä.",
    price: "6.50 €",
    image: "/images/foods/food_ham_cheese.jpg",
    tags: ["Klassikko", "Lämmin"],
  },
  {
    id: 952,
    name: "Grillijuustovoileipä & keitto",
    subtitle: "Ruokalista",
    description: "Rapea grillijuustoleipä ja lämmin tomaattikeitto — kahvilan lohturuoka.",
    longDescription:
      "Rapeaksi paistettu grillijuustoleipä tarjoillaan yhdessä samettisen tomaattikeiton kanssa — täydellinen yhdistelmä kylmiin päiviin. Yksinkertainen, mutta juuri siksi niin rakastettu annos.",
    price: "7.50 €",
    image: "/images/foods/food_grilled_cheese.jpg",
    tags: ["Lohturuoka", "Kasvisruoka"],
  },
  {
    id: 953,
    name: "Tuliset wok-nuudelit",
    subtitle: "Ruokalista",
    description: "Käsin heitellyt nuudelit, chilihiutaleet, kevätsipuli, tulinen wok-kastike.",
    longDescription:
      "Nuudelit wokataan kuumalla liekillä, jotta ne saavat autenttisen wok-maun. Tulisen kastikkeen, rapean kevätsipulin ja chilihiutaleiden yhdistelmä tekee tästä annoksesta rohkean ja mieleenpainuvan valinnan.",
    price: "9.90 €",
    image: "/images/foods/food_noodles.jpg",
    tags: ["Tulinen", "Vegaaninen"],
  },
  {
    id: 954,
    name: "Tuore fetasalaatti",
    subtitle: "Ruokalista",
    description: "Fetajuusto, kirsikkatomaatti, kurkku, mustat oliivit, sitruunaöljy.",
    longDescription:
      "Raikas salaatti tuoreista kirsikkatomaateista, rapeasta kurkusta, mustista oliiveista ja pehmeästä fetajuustosta, viimeisteltynä kevyellä sitruunaöljyllä. Kevyt mutta täyttävä valinta, kun haluat jotain raikasta ja terveellistä.",
    price: "8.50 €",
    image: "/images/foods/food_salad.jpg",
    tags: ["Kevyt", "Gluteeniton"],
  },
  {
    id: 955,
    name: "Mausteiset ranskalaiset",
    subtitle: "Ruokalista",
    description: "Käsin leikatut perunalohkot, mausteseos, kaksi dippikastiketta.",
    longDescription:
      "Käsin leikatut perunalohkot maustetaan talon omalla mausteseoksella ja paistetaan rapeiksi. Tarjolla kahden dippikastikkeen kanssa — täydellinen lisuke tai pieni herkku sellaisenaan.",
    price: "5.50 €",
    image: "/images/foods/food_fries.jpg",
    tags: ["Lisuke", "Suosikki"],
  },
];

const sweetItems: ProductDetail[] = [
  {
    id: 956,
    name: "Paahtoleipä, jäätelö & marjat",
    subtitle: "Jälkiruoka",
    description: "Rapea brioche-paahtoleipä, vaniljajäätelö, tuoreet marjat, suklaakastike.",
    longDescription:
      "Kultaisenruskeaksi paistettu brioche-paahtoleipä täydentyy pehmeällä vaniljajäätelöllä, tuoreilla marjoilla ja runsaalla suklaakastikkeella. Täydellinen jälkiruoka jaettavaksi — tai nautittavaksi yksin, ilman huonoa omaatuntoa.",
    price: "7.90 €",
    image: "/images/foods/food_dessert_toast.jpg",
    tags: ["Jälkiruoka", "Suosikki"],
  },
  {
    id: 957,
    name: "Vaniljajäätelö-herkku",
    subtitle: "Jälkiruoka",
    description: "Käsintehty vaniljajäätelö, kultainen sokerikoriste, kermarullat.",
    longDescription:
      "Taidokkaasti aseteltu jälkiruoka, jossa käsintehty vaniljajäätelö lepää herkän, kullanvärisen sokerikoristeen sisällä. Kermaiset rullat tuovat lisää tekstuuria — pieni taideteos, joka maistuu vähintään yhtä hyvältä kuin näyttää.",
    price: "6.90 €",
    image: "/images/foods/food_dessert_vanilla.jpg",
    tags: ["Taidokas", "Erikoisherkku"],
  },
  {
    id: 958,
    name: "Kokin jälkiruokayllätys",
    subtitle: "Jälkiruoka",
    description: "Viikoittain vaihtuva taidokas jälkiruoka — kysy tarjolla oleva makuyhdistelmä.",
    longDescription:
      "Kokkimme luova jälkiruoka vaihtuu viikoittain kauden parhaiden raaka-aineiden mukaan. Tällä viikolla tarjolla mansikkaa, suklaata ja kultaisia koristeita — kysy henkilökunnalta tarkempi kuvaus ennen tilausta.",
    price: "9.90 €",
    image: "/images/foods/food_dessert_special.jpg",
    tags: ["Viikon erikoisuus", "Yllätys"],
  },
];

function FoodCard({ item, large = false }: { item: ProductDetail; large?: boolean }) {
  const { addToCart } = useCart();
  const { openProduct } = useProductModal();

  return (
    <motion.div
      variants={staggerItem}
      onClick={() => openProduct(item)}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
        large ? "aspect-[4/5]" : "aspect-[5/4]"
      }`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B231C] via-[#2B231C]/25 to-[#2B231C]/5 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
      <div className="absolute inset-0 border border-[#FEFAE6]/10 rounded-3xl pointer-events-none group-hover:border-[#D1C8A9]/40 transition-colors duration-500" />

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart({
            id: item.id,
            name: item.name,
            subtitle: item.subtitle,
            description: item.description,
            price: item.price,
            image: item.image,
          });
        }}
        className="absolute top-4 right-4 inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-[0.6rem] uppercase tracking-[0.15em] font-medium bg-[#FEFAE6]/15 text-[#FEFAE6] border border-[#FEFAE6]/30 backdrop-blur-md hover:bg-[#FEFAE6]/25 transition-all duration-300 cursor-pointer opacity-100 translate-y-0 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0"
      >
        Lisää
        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#FEFAE6] text-[#2B231C]">
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 9L9 1M9 1H2.5M9 1V7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="text-[#D1C8A9]/80 text-[0.6rem] uppercase"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}
        >
          {item.subtitle}
        </span>
        <div className="flex items-start justify-between gap-3 mt-1">
          <h3
            className="text-[#FEFAE6] text-lg font-semibold leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {item.name}
          </h3>
          <span className="text-[#D1C8A9] text-sm font-mono shrink-0 mt-1">{item.price}</span>
        </div>
        <p className="text-[#FEFAE6]/55 text-xs leading-relaxed mt-2 max-h-20 opacity-100 md:max-h-0 md:group-hover:max-h-20 md:opacity-0 md:group-hover:opacity-100 overflow-hidden transition-all duration-500">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FoodMenu() {
  return (
    <section className="relative py-20 md:py-24 bg-[#E0D4C5]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[1px] bg-[#937C65]" />
            <span
              className="text-[#796A54] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
            >
              Ei vain kahvia
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl text-[#2B231C] font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Kevyttä ja täyttävää
          </h2>
          <p className="text-[#2B231C]/55 text-sm mt-3 max-w-lg">
            Nopeita, tuoreita herkkuja kupin kylkeen — ei raskasta ateriaa,
            vaan jotain oikeasti täyttävää kiireeseenkin.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {savoryItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 mb-8 flex items-center gap-4"
        >
          <span
            className="text-[#796A54] text-[0.65rem] uppercase shrink-0"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3em" }}
          >
            Makeat herkut
          </span>
          <span className="block h-[1px] flex-1 bg-[#2B231C]/10" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {sweetItems.map((item) => (
            <FoodCard key={item.id} item={item} large />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
