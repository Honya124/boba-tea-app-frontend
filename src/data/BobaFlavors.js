import { GiBoba, GiFruitBowl } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import { FaGlassMartiniAlt } from "react-icons/fa";
const iconStyle = (Icon) => <Icon size="2.5rem" color="#B77076"  />;

export const FruitTea = [
  "strawberry",
  "blueberry",
  "passion fruit",
  "fruit mix",
  "peach",
  "mango",
  "kumquat",
];

export const MilkTea = [
  "classic",
  "winter melon",
  "taro",
  "matcha",
  "coffee",
  "hazelnut",
  "caramel",
  "yellow melon",
  "mango",
  "chocolate",
  "blueberry",
  "strawberry",
];

export const Smoothes = [
  "taro",
  "oreo",
  "chocolate",
  "coffee",
  "yellow melon",
  "mango",
  "matcha",
  "winter melon",
  "hazelnut",
  "caramel",
  "blueberry",
  "strawberry",
  "mixberry",
  "strawbanana",
  "vanilla",
];

export const BobaSize = ["small", "medium", "large"];

export const BobaType = [
  "mango",
  "blueberry",
  "strawberry",
  "honeydew",
  "lychee",
];

export const JellyType = [
  "nata de coco",
  "mango nata de coco",
  "coffee",
  "rainbow",
];

export const AdditionalChoose = ["cream cheese", "brown sugar"];

export const ShopsIcons = [
  {
    icon: iconStyle(GiBoba),
    text: "all",
  },
  {
    icon: iconStyle(GiFruitBowl),
    text: "Fruit tea",
  },
  {
    icon: iconStyle(LuMilk),
    text: "milk tea",
  },
  {
    icon: iconStyle(FaGlassMartiniAlt),
    text: "smoothes",
  },
];
