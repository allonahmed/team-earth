import Info from "../../pages/Info";
import Solutions from "../../pages/Solutions";
import Donate from "../../pages/Donate";

const NavLinks = [
  {
    title: "Get Informed",
    link: "/info",
    component: <Info />
  },
  {
    title: "Solutions",
    link: "/solutions",
    component: <Solutions />
  },
  {
    title: "Donate",
    link: "/donate",
    component: <Donate />
  }
];

export default NavLinks;
