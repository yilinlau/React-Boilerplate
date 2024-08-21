import { Link } from "react-router-dom";
import PATHS from "../../router/path";

const headerMenus = [
  { id: 1, path: PATHS.home, label: "Home" },
  { id: 2, path: PATHS.aboutUs, label: "About Us" },
  { id: 3, path: PATHS.contactUs, label: "Contact Us" },
];

function Header() {
  return (
    <div className="p-2 space-x-2 bg-sky-500 text-white">
      {/*<Link to={PATHS.home}>Home</Link>
      <Link to={PATHS.aboutUs}>About Us</Link>
      <Link to={PATHS.contactUs}>Contact Us</Link>*/}
      {headerMenus.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          className="bg-sky-800 p-1 rounded-lg"
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
}

export default Header;
