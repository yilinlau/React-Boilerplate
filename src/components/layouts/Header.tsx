import { Link } from "react-router-dom";
import PATHS from "../../router/path";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const headerMenus = [
  { id: 1, path: PATHS.home, label: "Home" },
  { id: 2, path: PATHS.aboutUs, label: "About Us" },
  { id: 3, path: PATHS.contactUs, label: "Contact Us" },
];

// function Header() {
const Header = () => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  const themeSwitchHandler = (newTheme) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-sky-200 dark:bg-sky-700 dark:text-white flex items-center p-2  text-black">
      {/*<Link to={PATHS.home}>Home</Link>
      <Link to={PATHS.aboutUs}>About Us</Link>
      <Link to={PATHS.contactUs}>Contact Us</Link>*/}
      {headerMenus.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          className="p-1 rounded-md hover:bg-sky-700 hover:text-white "
        >
          {menu.label}
        </Link>
      ))}

      <div className="flex justify-end p-5 space-x-2 ml-5">
        <FaSun
          className="cursor-pointer"
          onClick={() => themeSwitchHandler("light")}
        />
        <FaMoon
          className="cursor-pointer"
          onClick={() => themeSwitchHandler("dark")}
        />
      </div>
    </div>
  );
};

export default Header;
