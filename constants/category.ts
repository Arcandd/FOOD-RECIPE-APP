import { categoryImages } from "./category-images";

interface category {
  id: number;
  name: string;
  icon: any;
}

export const CATEGORY_DATA: category[] = [
  {
    id: 1,
    name: "All",
    icon: categoryImages[0],
  },

  {
    id: 2,
    name: "Main",
    icon: categoryImages[1],
  },

  {
    id: 3,
    name: "Salads",
    icon: categoryImages[2],
  },

  {
    id: 4,
    name: "Soups",
    icon: categoryImages[3],
  },

  {
    id: 5,
    name: "Snacks",
    icon: categoryImages[4],
  },

  {
    id: 6,
    name: "Desserts",
    icon: categoryImages[5],
  },
  {
    id: 7,
    name: "Drinks",
    icon: categoryImages[6],
  },
];
