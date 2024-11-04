export interface Food {
  id: number;
  name: string;
  category: string;
  duration: string;
  status: string;
  materials: string[];
  steps: string[];
  image: any;
  imageDetail: any;
  desc: string;
}

export const FOOD_DATA: Food[] = [
  {
    id: 1,
    name: "Seafood Fried Rice",
    category: "Main",
    duration: "10 min",
    status: "Not cooking",
    materials: [
      "2 cups of cooked rice",
      "200 grams of shrimp",
      "1 cup of mixed vegetables",
      "2 tablespoons of soy sauce",
      "2 eggs",
      "2 tablespoons of cooking oil",
      "2 cloves of garlic (minced)",
      "Salt and pepper to taste",
      "Green onions ",
    ],
    steps: [
      "Heat Oil: In a large pan or wok, heat 2 tablespoons of oil over medium-high heat.",
      "Sauté Garlic: Add minced garlic and sauté for 30 seconds until fragrant.",
      "Cook Shrimp: Add shrimp, cooking for 2-3 minutes until pink. Remove and set aside.",
      "Stir-Fry Vegetables: Add mixed vegetables to the pan, stir-frying for 2-3 minutes until tender.",
      "Add Rice: Stir in the cooked rice, breaking up clumps.",
      "Season: Pour in soy sauce and mix. Add salt and pepper to taste.",
      "Scramble Eggs: Push rice to one side, crack eggs into the pan, and scramble until mostly cooked, then mix into the rice.",
      "Combine: Return shrimp to the pan, stirring everything together until heated through.",
      "Serve: Garnish with green onions if desired, and enjoy!",
    ],
    image: require("@/assets/images/foods/fried-rice.png"),
    imageDetail: require("@/assets/images/foods/fried-rice-detail.png"),
    desc: "Fried rice is a stir-fried dish of cooked rice mixed with vegetables, eggs, and often meat or seafood, seasoned for a savory flavor.",
  },

  {
    id: 2,
    name: "Steak",
    category: "Main",
    duration: "6-15 min",
    status: "Not cooking",
    materials: [
      "2 ribeye or sirloin steaks (about 1-inch thick)",
      "Salt and pepper to taste",
      "2 tablespoons olive oil or butter",
      "2 cloves garlic (crushed)",
      "Fresh herbs (like rosemary or thyme, optional)",
    ],
    steps: [
      "Prepare Steaks: Bring steaks to room temperature for about 30 minutes. Pat dry and season generously with salt and pepper on both sides.",
      "Heat Pan: In a skillet or grill pan, heat 2 tablespoons of olive oil or butter over medium-high heat until shimmering.",
      "Cook Steaks: Add the steaks to the pan and sear for 4-5 minutes without moving them, creating a nice crust. Flip and cook for an additional 3-5 minutes for medium-rare, or to your desired doneness.",
      "Add Flavor: In the last minute of cooking, add crushed garlic and fresh herbs to the pan for extra flavor.",
      "Rest Steaks: Remove the steaks from the pan and let them rest for 5-10 minutes to allow juices to redistribute.",
      "Serve: Slice and serve with your favorite sides, enjoying the rich flavor and tenderness of the steak.",
    ],
    image: require("@/assets/images/foods/steak.png"),
    imageDetail: require("@/assets/images/foods/steak-detail.png"),
    desc: "Steak is a grilled or pan-seared slice of beef, seasoned and cooked to varying levels of doneness, often served with sides like vegetables or potatoes.",
  },
];