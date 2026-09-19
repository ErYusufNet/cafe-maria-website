export interface MenuItem {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  video?: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Karamelli Frappuccino",
    subtitle: "Sekoitettu täydellisyys",
    description: "Tunnusomainen voinen karamellisiirappimme sekoitettuna kahviin, maitoon ja jäähän. Viimeistelty kermavaahdolla.",
    price: "5.90 €",
    image: "/images/coffee/menu_frap_highres.jpg",
  },
  {
    id: 2,
    name: "Karamelli Macchiato",
    subtitle: "Taidokkaasti kerrostettu",
    description: "Tuoreena höyrytetty maito vaniljasiirapilla, merkitty espressolla ja viimeistelty karamellikastikkeella.",
    price: "5.40 €",
    image: "/images/coffee/menu_custom_2.jpg",
  },
  {
    id: 3,
    name: "Kurpitsakahvi Latte",
    subtitle: "Kauden suosikki",
    description: "Oma espressomme ja höyrytetty maito yhdistettynä kurpitsan ja kanelin rakastettuun makuparivaljakkoon.",
    price: "5.65 €",
    image: "/images/coffee/menu_custom_3.jpg",
  },
  {
    id: 4,
    name: "Nitro Cold Brew",
    subtitle: "Samettinen kaato",
    description: "Pienen erän kylmäuutettu kahvimme typellä käsiteltynä — luonnollisen makea maku ja laskeutuva kerma.",
    price: "4.95 €",
    image: "/images/coffee/menu_custom_4.jpg",
  },
  {
    id: 5,
    name: "Café Marian Flat White",
    subtitle: "Rohkea ja pehmeä",
    description: "Pehmeät ristretto-espressoannokset ja täydellisesti höyrytetty täysmaito luovat rohkean, samettisen lopputuloksen.",
    price: "5.15 €",
    image: "/images/coffee/menu_custom_5.jpg",
  },
];
