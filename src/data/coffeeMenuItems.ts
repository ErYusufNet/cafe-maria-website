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
  {
    id: 806,
    name: "Latte",
    subtitle: "Klassikko",
    description:
      "Silkkisen pehmeä espresso ja huolella höyrytetty maito — kahvilamme perusklassikko.",
    longDescription:
      "Kaksi annosta tuoretta espressoa ja runsaasti pehmeäksi höyrytettyä maitoa, kaadettuna kauniiksi latte art -kuvioksi. Yksinkertainen, tasapainoinen ja aina toimiva valinta niin aamuun kuin iltapäivän taukoon.",
    price: "4.90 €",
    image: "/images/menu/latte.jpg",
    tags: ["Klassikko", "Suosikki"],
  },
  {
    id: 807,
    name: "Cappuccino",
    subtitle: "Italialainen klassikko",
    description:
      "Tasapainoinen kolmikko espressoa, höyrytettyä maitoa ja paksua maitovaahtoa.",
    longDescription:
      "Perinteinen italialainen cappuccino: kolmasosa espressoa, kolmasosa höyrytettyä maitoa ja kolmasosa ilmavaa maitovaahtoa. Täyteläinen mutta kevyt — nautitaan parhaiten heti valmistuksen jälkeen, kun vaahto on korkeimmillaan.",
    price: "4.70 €",
    image: "/images/menu/cappuccino.jpg",
    tags: ["Klassikko", "Italialainen"],
  },
  {
    id: 808,
    name: "Mokka",
    subtitle: "Suklainen suosikki",
    description:
      "Espresso, tumma suklaa ja höyrytetty maito — kahvin ja suklaan täydellinen liitto.",
    longDescription:
      "Runsas espresso yhdistettynä sulatettuun tummaan suklaaseen ja pehmeäksi höyrytettyyn maitoon. Viimeistelty kevyellä maitovaahdolla — täyteläinen ja hemmotteleva valinta suklaan ystäville.",
    price: "5.20 €",
    image: "/images/menu/mokka.jpg",
    tags: ["Suklainen", "Hemmotteleva"],
  },
  {
    id: 809,
    name: "Americano",
    subtitle: "Kevyt ja aromikas",
    description:
      "Kaksi annosta espressoa laimennettuna kuumalla vedellä — puhdas kahvin maku.",
    longDescription:
      "Kaksi annosta tuoretta espressoa uutettuna kuuman veden kanssa, jolloin syntyy kevyempi mutta yhtä aromikas kuppi. Sopii täydellisesti niille, jotka nauttivat kahvin puhtaasta mausta ilman maitoa.",
    price: "3.95 €",
    image: "/images/menu/americano.jpg",
    tags: ["Kevyt", "Musta kahvi"],
  },
  {
    id: 810,
    name: "Tupla Espresso",
    subtitle: "Voimakas ja tiivis",
    description:
      "Kaksi annosta täyteläistä espressoa, samettinen crema päällä.",
    longDescription:
      "Kaksinkertainen annos tiivistä, voimakasta espressoa — täydellisesti uutettuna niin, että pinnalle muodostuu paksu, samettinen crema. Nautitaan parhaiten pienestä kupista, hitaasti maistellen.",
    price: "3.80 €",
    image: "/images/menu/tupla-espresso.jpg",
    tags: ["Voimakas", "Intensiivinen"],
  },
  {
    id: 811,
    name: "Cortado",
    subtitle: "Espanjalainen suosikki",
    description:
      "Espresso ja lämmin maito tasasuhteessa — pieni mutta täyteläinen.",
    longDescription:
      "Espanjalaista alkuperää oleva cortado yhdistää espresson ja lämpimän, kevyesti höyrytetyn maidon tasasuhteessa. Pienempi kuin latte, mutta yhtä pehmeä — täydellinen valinta, kun kaipaat jotain vahvaa mutta silti sulavaa.",
    price: "4.50 €",
    image: "/images/menu/cortado.jpg",
    tags: ["Tasapainoinen", "Pieni kuppi"],
  },
  {
    id: 812,
    name: "Jäinen Latte",
    subtitle: "Raikas kesäsuosikki",
    description:
      "Kylmä espresso, jäätä ja kylmä maito — raikas latte ilman höyryä.",
    longDescription:
      "Tuore espresso kaadettuna jään päälle ja täydennettynä kylmällä maidolla. Raikas ja virkistävä vaihtoehto perinteiselle lämpimälle latelle — täydellinen valinta lämpimänä päivänä.",
    price: "5.10 €",
    image: "/images/menu/jainen-latte.jpg",
    tags: ["Kylmä", "Raikas"],
  },
  {
    id: 813,
    name: "Affogato",
    subtitle: "Jälkiruokakahvi",
    description:
      "Pallo vaniljajäätelöä, kuuma espresso kaadettuna päälle — kahvi ja jälkiruoka yhdessä.",
    longDescription:
      "Klassinen italialainen herkku: pallo täyteläistä vaniljajäätelöä, jonka päälle kaadetaan kuuma, tuore espresso pöydässä. Jäätelö sulaa hitaasti kahvin joukkoon — täydellinen tapa päättää ateria.",
    price: "6.50 €",
    image: "/images/menu/affogato.jpg",
    tags: ["Jälkiruoka", "Hemmotteleva"],
  },
  {
    id: 814,
    name: "Vanilja Latte",
    subtitle: "Pehmeän makea suosikki",
    description:
      "Espresso, vaniljasiirappi ja höyrytetty maito — pehmeän makea klassikko.",
    longDescription:
      "Tuore espresso ja aromikas vaniljasiirappi yhdistettynä silkkisen pehmeäksi höyrytettyyn maitoon. Tasapainoinen makeus ja kahvin syvyys kohtaavat kupissa, joka miellyttää lähes kaikkia.",
    price: "5.30 €",
    image: "/images/menu/vanilja-latte.jpg",
    tags: ["Makea", "Suosikki"],
  },
  {
    id: 815,
    name: "Espresso Macchiato",
    subtitle: "Pieni mutta voimakas",
    description:
      "Espresso \"tahrattuna\" pienellä täkillä vaahdotettua maitoa.",
    longDescription:
      "Tiivis espresso, jonka pinnalle lisätään vain pieni täkki vaahdotettua maitoa — nimensä mukaisesti espresso on \"tahrattu\" (macchiato) maidolla. Voimakas ja tiivis, mutta hieman pehmeämpi kuin pelkkä espresso.",
    price: "4.10 €",
    image: "/images/menu/espresso-macchiato.jpg",
    tags: ["Voimakas", "Pieni kuppi"],
  },
];
