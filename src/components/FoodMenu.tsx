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
  {
    id: 960,
    name: "Tillitäytepiirakka",
    subtitle: "Suolainen leivos",
    description: "Rapea täytepiirakka, tuoretta tilliä ja fetajuustoa.",
    longDescription:
      "Kevyesti rapea taikinakuori kätkee sisäänsä tuoretta tilliä ja pehmeää fetajuustoa — pieni, suolainen herkku kahvikupin kylkeen.",
    price: "3.90 €",
    image: "/images/menu/tillipiirakka.jpg",
    tags: ["Suolainen", "Kasvisruoka"],
  },
  {
    id: 961,
    name: "Pinaattipiirakka",
    subtitle: "Suolainen leivos",
    description: "Lehtitaikinapiirakka, pinaattia ja fetajuustoa.",
    longDescription:
      "Rapea lehtitaikina täytettynä runsaalla pinaatilla ja suolaisella fetajuustolla — klassinen välipala, joka sopii niin aamiaiseksi kuin lounaaksi.",
    price: "4.50 €",
    image: "/images/menu/pinaattipiirakka.jpg",
    tags: ["Kasvisruoka", "Klassikko"],
  },
  {
    id: 962,
    name: "Kinkkupiirakka",
    subtitle: "Suolainen leivos",
    description: "Lehtitaikinapiirakka, kinkkua ja sulavaa juustoa.",
    longDescription:
      "Mehevä kinkku ja sulava juusto rapean lehtitaikinan sisällä — täyttävä ja lämmittävä valinta pitkään päivään.",
    price: "4.50 €",
    image: "/images/menu/kinkkupiirakka.jpg",
    tags: ["Klassikko", "Lämmin"],
  },
  {
    id: 963,
    name: "Kinkkukroissantti",
    subtitle: "Suolainen leivos",
    description: "Voisarvi täytettynä kinkulla ja juustolla.",
    longDescription:
      "Rapea, voinen kroissantti täytettynä mehevällä kinkulla ja sulavalla juustolla — täydellinen valinta nopeaan mutta täyttävään aamupalaan.",
    price: "4.90 €",
    image: "/images/menu/kinkkukroissantti.jpg",
    tags: ["Suosikki", "Lämmin"],
  },
  {
    id: 964,
    name: "Savustettu kalkkuna-ciabatta",
    subtitle: "Ruokalista",
    description: "Rapea ciabatta, savustettua kalkkunaa ja tuoreita täytteitä.",
    longDescription:
      "Rapeaksi paahdettu ciabattaleipä täytettynä mehevällä savustetulla kalkkunalla ja raikkailla täytteillä — täyttävä lounasvaihtoehto kupin kylkeen.",
    price: "8.50 €",
    image: "/images/menu/kalkkuna-ciabatta.jpg",
    video: "/images/menu/kalkkuna-ciabatta.mp4",
    tags: ["Täyttävä", "Suosikki"],
  },
  {
    id: 965,
    name: "Parmesan-grissini",
    subtitle: "Suolainen naposteltava",
    description: "Rapeat leipätikut parmesaanijuustolla.",
    longDescription:
      "Ohuiksi rullatut, rapeaksi paistetut leipätikut, joissa parmesaanijuuston pähkinäinen maku — täydellinen pieni naposteltava kahvin kaveriksi.",
    price: "3.50 €",
    image: "/images/menu/parmesan-grissini.jpg",
    tags: ["Rapea", "Naposteltava"],
  },
  {
    id: 966,
    name: "Pesto-kroissantti",
    subtitle: "Suolainen leivos",
    description: "Voisarvi basilikapestolla ja juustolla täytettynä.",
    longDescription:
      "Voinen kroissantti täytettynä tuoreella basilikapestolla ja juustolla — mausteikas ja tuoksuva vaihtoehto aamiaispöytään.",
    price: "4.90 €",
    image: "/images/menu/pesto-kroissantti.jpg",
    video: "/images/menu/pesto-kroissantti.mp4",
    tags: ["Mausteikas", "Uutuus"],
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
  {
    id: 970,
    name: "Pistaasikeksi",
    subtitle: "Leivonnainen",
    description: "Rapea keksi, täynnä murskattua pistaasipähkinää.",
    longDescription:
      "Rapea, voitaikinainen keksi täynnä murskattua pistaasipähkinää — pähkinäinen ja hieman suolainen vastapaino makealle kahvillesi.",
    price: "3.90 €",
    image: "/images/menu/pistaasikeksi.jpg",
    video: "/images/menu/pistaasikeksi.mp4",
    tags: ["Pähkinäinen", "Suosikki"],
  },
  {
    id: 971,
    name: "Suklaakonvehtivalikoima",
    subtitle: "Konvehdit",
    description: "Käsintehtyjen suklaakonvehtien valikoima.",
    longDescription:
      "Pieni valikoima käsintehtyjä suklaakonvehteja, joissa jokaisessa oma makunsa — täydellinen pieni herkku kahvin kanssa tai tuliaiseksi.",
    price: "6.90 €",
    image: "/images/menu/suklaakonvehdit.jpg",
    video: "/images/menu/suklaakonvehdit.mp4",
    tags: ["Käsintehty", "Lahjaksi sopiva"],
  },
  {
    id: 972,
    name: "Pistaasibrownie",
    subtitle: "Leivonnainen",
    description: "Mehevä suklaabrownie ja pistaasimurska.",
    longDescription:
      "Tiivis ja mehevä suklaabrownie, jonka pinnalla rouskuva pistaasimurska — makean ja pähkinäisen täydellinen liitto.",
    price: "5.50 €",
    image: "/images/menu/pistaasibrownie.jpg",
    video: "/images/menu/pistaasibrownie.mp4",
    tags: ["Mehevä", "Pähkinäinen"],
  },
  {
    id: 973,
    name: "Lotus-brownie",
    subtitle: "Leivonnainen",
    description: "Suklaabrownie, Lotus-keksikastiketta.",
    longDescription:
      "Mehevä suklaabrownie täydentyy Lotus-keksin karamellisella, kanelisella maulla — nykyaikainen suosikki kahvilan vitriinissä.",
    price: "5.50 €",
    image: "/images/menu/lotus-brownie.jpg",
    video: "/images/menu/lotus-brownie.mp4",
    tags: ["Suosikki", "Mehevä"],
  },
  {
    id: 974,
    name: "Kirsikkabrownie",
    subtitle: "Leivonnainen",
    description: "Suklaabrownie ja hapahkoa kirsikkaa.",
    longDescription:
      "Tiivis suklaabrownie, jossa hapahkot kirsikat tuovat raikkaan vastapainon täyteläiselle suklaalle.",
    price: "5.50 €",
    image: "/images/menu/kirsikkabrownie.jpg",
    video: "/images/menu/kirsikkabrownie.mp4",
    tags: ["Hedelmäinen", "Mehevä"],
  },
  {
    id: 975,
    name: "Suklaakroissantti",
    subtitle: "Leivonnainen",
    description: "Voisarvi täytettynä sulavalla suklaalla.",
    longDescription:
      "Rapea, kerroksinen voisarvi täytettynä runsaalla, sulavalla suklaalla — ranskalainen klassikko joka sopii mihin kellonaikaan tahansa.",
    price: "3.90 €",
    image: "/images/menu/suklaakroissantti.jpg",
    video: "/images/menu/suklaakroissantti.mp4",
    tags: ["Klassikko", "Suosikki"],
  },
  {
    id: 976,
    name: "Mansikkaleivos",
    subtitle: "Leivos",
    description: "Kevyt leivos tuoreella mansikalla ja vaniljakermalla.",
    longDescription:
      "Kevyt, ilmava leivos täytettynä silkkisellä vaniljakermalla ja tuoreilla mansikoilla — kaunis pieni taideteos vitriinissä.",
    price: "5.90 €",
    image: "/images/menu/mansikkaleivos.jpg",
    video: "/images/menu/mansikkaleivos.mp4",
    tags: ["Tuore", "Taidokas"],
  },
  {
    id: 977,
    name: "Kanelipulla",
    subtitle: "Leivonnainen",
    description: "Pehmeä, tuoreesti leivottu kanelipulla.",
    longDescription:
      "Pehmeä hiivataikina, runsaasti kanelia ja sokerimurua — suomalainen klassikko, joka tuoksuu koko kahvilan täydeltä.",
    price: "3.50 €",
    image: "/images/menu/kanelipulla.jpg",
    video: "/images/menu/kanelipulla.mp4",
    tags: ["Klassikko", "Suomalainen"],
  },
  {
    id: 978,
    name: "Crème brûlée -viineli",
    subtitle: "Leivonnainen",
    description: "Tanskalaisviineli crème brûlée -täytteellä.",
    longDescription:
      "Rapea voitaikinaviineli täytettynä samettisella crème brûlée -vaniljakermalla ja rapealla karamellikuorrutuksella.",
    price: "4.90 €",
    image: "/images/menu/creme-brulee-viineli.jpg",
    video: "/images/menu/creme-brulee-viineli.mp4",
    tags: ["Uutuus", "Taidokas"],
  },
  {
    id: 979,
    name: "Sitruunaleivos",
    subtitle: "Leivos",
    description: "Raikas leivos sitruunalla ja vaniljakermalla.",
    longDescription:
      "Ilmava leivos, jossa raikas sitruunatäyte tasapainottaa makeaa vaniljakermaa — täydellinen piristys päivään.",
    price: "5.90 €",
    image: "/images/menu/sitruunaleivos.jpg",
    video: "/images/menu/sitruunaleivos.mp4",
    tags: ["Raikas", "Taidokas"],
  },
  {
    id: 980,
    name: "Pain Suisse",
    subtitle: "Leivonnainen",
    description: "Voitaikinaleivos, suklaata ja vaniljakermaa.",
    longDescription:
      "Ranskalainen leivonnaisklassikko, jossa kerroksinen voitaikina yhdistyy suklaaseen ja pehmeään vaniljakermaan.",
    price: "4.90 €",
    image: "/images/menu/pain-suisse.jpg",
    video: "/images/menu/pain-suisse.mp4",
    tags: ["Ranskalainen", "Suosikki"],
  },
  {
    id: 981,
    name: "Suffleleivos",
    subtitle: "Leivos",
    description: "Ilmava leivos, jossa kevyt kermatäyte.",
    longDescription:
      "Erittäin ilmava, kevyt leivos jonka sisältä paljastuu pehmeä kermatäyte — kevyt tapa päättää kahvihetki makealla nuotilla.",
    price: "5.90 €",
    image: "/images/menu/suffleleivos.jpg",
    video: "/images/menu/suffleleivos.mp4",
    tags: ["Kevyt", "Taidokas"],
  },
  {
    id: 982,
    name: "Tiramisu",
    subtitle: "Jälkiruoka",
    description: "Klassinen italialainen tiramisu.",
    longDescription:
      "Kerroksittain aseteltu mascarpone-kerma ja kahviin kastetut sormikeksit, viimeisteltynä kaakaojauheella — italialainen klassikko.",
    price: "6.50 €",
    image: "/images/menu/tiramisu.jpg",
    video: "/images/menu/tiramisu.mp4",
    tags: ["Klassikko", "Kahvinmakuinen"],
  },
  {
    id: 983,
    name: "Manteliviineli",
    subtitle: "Leivonnainen",
    description: "Voisarvi manteleilla ja mantelitäytteellä.",
    longDescription:
      "Kaksinkertaisesti leivottu voisarvi, joka täytetään ja koristellaan runsaalla manteliseoksella — rapea ulkopinta, mehevä sisus.",
    price: "4.50 €",
    image: "/images/menu/mantelikroissantti.jpg",
    video: "/images/menu/mantelikroissantti.mp4",
    tags: ["Pähkinäinen", "Suosikki"],
  },
  {
    id: 984,
    name: "Voisarvi",
    subtitle: "Leivonnainen",
    description: "Klassinen, voinen ranskalainen kroissantti.",
    longDescription:
      "Kerros kerrokselta leivottu, rapea ja voinen kroissantti aivan sellaisenaan — yksinkertainen mutta täydellinen.",
    price: "3.20 €",
    image: "/images/menu/voisarvi.jpg",
    video: "/images/menu/voisarvi.mp4",
    tags: ["Klassikko"],
  },
  {
    id: 985,
    name: "San Sebastian -juustokakku",
    subtitle: "Jälkiruoka",
    description: "Palanut baskimainen juustokakku.",
    longDescription:
      "Uunissa tarkoituksella tummaksi paistettu juustokakku, jonka pinta on karamellisoitunut ja sisus samettisen pehmeä.",
    price: "6.90 €",
    image: "/images/menu/san-sebastian-juustokakku.jpg",
    video: "/images/menu/san-sebastian-juustokakku.mp4",
    tags: ["Suosikki", "Samettinen"],
  },
  {
    id: 986,
    name: "Suklaakeksi",
    subtitle: "Leivonnainen",
    description: "Pehmeä keksi, runsaasti suklaapaloja.",
    longDescription:
      "Reunoiltaan rapea, keskeltä pehmeä keksi täynnä sulavia suklaapaloja — klassikko joka ei koskaan petä.",
    price: "3.50 €",
    image: "/images/menu/suklaakeksi.jpg",
    video: "/images/menu/suklaakeksi.mp4",
    tags: ["Klassikko", "Suosikki"],
  },
  {
    id: 987,
    name: "Mansikka-choux",
    subtitle: "Leivos",
    description: "Choux-leivos vaniljakermalla ja mansikalla.",
    longDescription:
      "Kevyt choux-taikina täytettynä silkkisellä vaniljakermalla ja tuoreilla mansikoilla — pieni, tyylikäs herkku.",
    price: "5.50 €",
    image: "/images/menu/mansikka-choux.jpg",
    video: "/images/menu/mansikka-choux.mp4",
    tags: ["Tuore", "Taidokas"],
  },
  {
    id: 988,
    name: "Florentin-leivos",
    subtitle: "Leivonnainen",
    description: "Rapea manteli-karamellileivos, suklaapohjalla.",
    longDescription:
      "Ohut, rapea manteli-karamellikuori suklaapohjan päällä — pieni mutta intensiivinen herkku kahvin kaveriksi.",
    price: "4.20 €",
    image: "/images/menu/florentin.jpg",
    tags: ["Rapea", "Pähkinäinen"],
  },
  {
    id: 989,
    name: "Granolakulho",
    subtitle: "Aamiainen",
    description: "Granolaa, jogurttia ja tuoreita marjoja.",
    longDescription:
      "Rapea granola, pehmeä jogurtti ja tuoreet marjat kerroksittain aseteltuna — kevyt ja ravitseva tapa aloittaa päivä.",
    price: "6.90 €",
    image: "/images/menu/granolakulho.jpg",
    tags: ["Kevyt", "Terveellinen"],
  },
  {
    id: 990,
    name: "Magnolia-mansikka",
    subtitle: "Jälkiruoka",
    description: "Kerroksellinen mansikkakakku, keksimurulla.",
    longDescription:
      "Kevyt vaniljakerma, tuore mansikka ja rapea keksimuru kerroksittain — suosittu, viilentävä jälkiruoka.",
    price: "5.90 €",
    image: "/images/menu/magnolia-mansikka.jpg",
    tags: ["Viilentävä", "Suosikki"],
  },
  {
    id: 991,
    name: "Magnolia-banaani",
    subtitle: "Jälkiruoka",
    description: "Kerroksellinen banaanikakku, keksimurulla.",
    longDescription:
      "Kevyt vaniljakerma, kypsä banaani ja rapea keksimuru — pehmeä ja lohduttava klassikko.",
    price: "5.90 €",
    image: "/images/menu/magnolia-banaani.jpg",
    tags: ["Lohturuoka", "Suosikki"],
  },
  {
    id: 992,
    name: "Kakkupala",
    subtitle: "Jälkiruoka",
    description: "Tuore, yksilöllinen kakkupala.",
    longDescription:
      "Pieni, kauniisti viimeistelty kakkupala tuoreista raaka-aineista — täydellinen kokoinen herkku yhdelle.",
    price: "5.50 €",
    image: "/images/menu/mono-kakkupala.jpg",
    tags: ["Taidokas", "Tuore"],
  },
  {
    id: 993,
    name: "Pain au chocolat",
    subtitle: "Leivonnainen",
    description: "Voitaikinaleivos, kaksi suklaatankoa sisällä.",
    longDescription:
      "Kerroksinen, rapea voitaikina kätkee sisäänsä kaksi tummaa suklaatankoa — ranskalainen aamupalaklassikko.",
    price: "3.90 €",
    image: "/images/menu/pain-au-chocolat.jpg",
    tags: ["Klassikko", "Ranskalainen"],
  },
  {
    id: 994,
    name: "Appelsiini-madeleine",
    subtitle: "Leivonnainen",
    description: "Pehmeä madeleine-kakku, appelsiininkuorta.",
    longDescription:
      "Pehmeä, simpukankuorinen madeleine-pikkuleipä raikkaalla appelsiininkuorimaulla — täydellinen pala kahvin kylkeen.",
    price: "2.90 €",
    image: "/images/menu/appelsiini-madeleine.jpg",
    tags: ["Raikas", "Pieni herkku"],
  },
  {
    id: 995,
    name: "Suklaa-choux",
    subtitle: "Leivos",
    description: "Choux-leivos suklaakermalla.",
    longDescription:
      "Kevyt choux-taikina täytettynä runsaalla suklaakermalla ja viimeisteltynä kiiltävällä suklaakuorrutuksella.",
    price: "5.50 €",
    image: "/images/menu/suklaa-choux.jpg",
    tags: ["Suklainen", "Taidokas"],
  },
  {
    id: 996,
    name: "Suklaatarteletti",
    subtitle: "Leivos",
    description: "Rapea tarteletti, täyteläistä suklaaganachea.",
    longDescription:
      "Murea, voinen tarttelettipohja täytettynä täyteläisellä suklaaganachella — pieni mutta intensiivinen suklaaelämys.",
    price: "5.90 €",
    image: "/images/menu/suklaatarteletti.jpg",
    tags: ["Intensiivinen", "Taidokas"],
  },
  {
    id: 997,
    name: "Mansikkatarteletti",
    subtitle: "Leivos",
    description: "Rapea tarteletti, vaniljakermaa ja tuoretta mansikkaa.",
    longDescription:
      "Murea tarttelettipohja, silkkinen vaniljakerma ja kauniisti aseteltu tuore mansikka — kevyt ja kaunis valinta.",
    price: "5.90 €",
    image: "/images/menu/mansikkatarteletti.jpg",
    tags: ["Tuore", "Taidokas"],
  },
  {
    id: 998,
    name: "Korvapuusti",
    subtitle: "Leivonnainen",
    description: "Perinteinen suomalainen kanelipulla.",
    longDescription:
      "Perinteisellä reseptillä leivottu, kardemumman ja kanelin tuoksuinen korvapuusti — suomalaisen kahvipöydän kulmakivi.",
    price: "3.20 €",
    image: "/images/menu/korvapuusti.jpg",
    tags: ["Klassikko", "Suomalainen"],
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
