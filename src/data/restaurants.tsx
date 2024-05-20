import { dishes } from "./dishes";

export const restaurants = [
  {
    id: 0,
    name: "Fast Food Delight",
    image: require("../../assets/fastfood.jpg"),
    description: "Quick and tasty fast food.",
    rating: 4.5,
    category: "Fast Food",
    address: "123 Fast Lane",
    latitude: 44.7722,
    longitude: 17.191,
  },
  {
    id: 1,
    name: "Market Fresh",
    image: require("../../assets/market.png"),
    description: "Fresh produce and groceries.",
    rating: 4.2,
    category: "Market",
    address: "456 Fresh Blvd",
    latitude: 44.7735,
    longitude: 17.188,
  },
  {
    id: 2,
    name: "Healthy Bites",
    image: require("../../assets/healthy.jpg"),
    description: "Nutritious and delicious.",
    rating: 4.8,
    category: "Healthy Food",
    address: "789 Health Ave",
    latitude: 44.7751,
    longitude: 17.1935,
  },
  {
    id: 3,
    name: "Golden Dragon",
    image: require("../../assets/chinese.jpg"),
    description: "Authentic Chinese cuisine.",
    rating: 4.7,
    category: "Chinese",
    address: "101 Dragon St",
    latitude: 44.7715,
    longitude: 17.1967,
  },
  {
    id: 4,
    name: "Green Garden",
    image: require("../../assets/healthy.jpg"),
    description: "Organic and healthy meals.",
    rating: 4.6,
    category: "Healthy Food",
    address: "202 Green Rd",
    latitude: 44.773,
    longitude: 17.1895,
  },
  {
    id: 5,
    name: "Gourmet Restaurant",
    image: require("../../assets/restaurant.jpeg"),
    description: "Fine dining experience.",
    rating: 4.9,
    category: "Restaurant",
    address: "303 Gourmet St",
    latitude: 44.7742,
    longitude: 17.1923,
  },
  {
    id: 6,
    name: "Italian Bistro",
    category: "Italian",
    address: "123 Main St",
    image: require("../../assets/italianbistro.png"),
    dishes: [dishes[0], dishes[1], dishes[2]],
    latitude: 44.7754,
    longitude: 17.1941,
  },
  {
    id: 7,
    name: "Mexican Fiesta",
    category: "Mexican",
    address: "456 Elm St",
    image: require("../../assets/mexicanfiesta.jpeg"),
    dishes: [dishes[3], dishes[4], dishes[5]],
    latitude: 44.7766,
    longitude: 17.196,
  },
];
