import MenuBooklet from "./MenuBooklet.jsx";
import { menus } from "../../data/menus.js";

export default function ManilaMenu() {
  return <MenuBooklet menu={menus.manila} />;
}
