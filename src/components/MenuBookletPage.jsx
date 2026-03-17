import ManilaMenu from "./menus/ManilaMenu.jsx";
import CebuMenu from "./menus/CebuMenu.jsx";
import DavaoMenu from "./menus/DavaoMenu.jsx";
import BoracayMenu from "./menus/BoracayMenu.jsx";
import SiargaoMenu from "./menus/SiargaoMenu.jsx";

const menuMap = {
  manila: ManilaMenu,
  cebu: CebuMenu,
  davao: DavaoMenu,
  boracay: BoracayMenu,
  siargao: SiargaoMenu,
};

export default function MenuBookletPage({ menuKey }) {
  const MenuComponent = menuMap[menuKey];
  if (!MenuComponent) return null;
  return <MenuComponent />;
}
