export interface MenuCategoryMeta {
  slug: string;
  href: string;
  name: string;
  subtitle: string;
  video?: string;
  image: string;
}

export const menuCategories: MenuCategoryMeta[] = [
  {
    slug: "kahvit",
    href: "/menu/kahvit",
    name: "Kahvit",
    subtitle: "Suosikkikategoria",
    image: "/images/coffee/gallery_latte.jpg",
  },
  {
    slug: "valipalat",
    href: "/menu/valipalat",
    name: "Kevyttä ja täyttävää",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/kalkkuna-ciabatta.mp4",
    image: "/images/menu/kalkkuna-ciabatta.jpg",
  },
  {
    slug: "makeat",
    href: "/menu/makeat",
    name: "Makeat herkut",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/suffleleivos.mp4",
    image: "/images/menu/suffleleivos.jpg",
  },
  {
    slug: "salaatit",
    href: "/menu/salaatit",
    name: "Salaatit",
    subtitle: "Suosikkikategoria",
    video: "/images/menu/bataatti-granaattiomenasalaatti.mp4",
    image: "/images/menu/bataatti-granaattiomenasalaatti.jpg",
  },
];
