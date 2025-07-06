import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { RoutePaths } from "../routes/RoutesPath";
import { ResumeIcon } from "../assets/Svg";
import { navLinks } from "../utils/navBar";
import ThemeToggler from "./ThemeToggler";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`hidden lg:block px-5 py-6 transition-transform duration-300 sticky top-0 z-10 container ${
        isVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <nav
        className={`shadow-bg-shadow mx-auto border-primary-light  p-5 border rounded-2xl flex justify-between items-center w-full ${
          isVisible
            ? "bg-white/50 backdrop-blur-xl dark:border-primary-extra-light/10 dark:bg-primary-extra-light/5 dark:backdrop-blur"
            : "bg-white glass-card"
        }`}
      >
        <Link to={RoutePaths.ROOT} className="flex items-center gap-2">
          <div className="rounded-full size-14 glass-card">
            <img src={logo} alt="" className="object-cover" />
          </div>
          <span>
            <p className="text-primary-dark dark:text-white font-medium font-un-bounded text-sm">
              Micheal Tolu Francis
            </p>
            <p className="text-black dark:text-white text-xs ">
              Front-end Developer
            </p>
          </span>
        </Link>

        <div className=" flex gap-6 items-center text-xs">
          {navLinks.map((link) => (
            <a
              href={link.path}
              className="text-black dark:text-white font-un-bounded hover:underline"
              key={link.path}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <ThemeToggler />

          <a
            href="https://docs.google.com/document/d/1iIdww24Y-5S4D81YegynBu1a5UAAsVwL/edit?usp=sharing&ouid=113946696695913699684&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-primary-light rounded-2xl h-12 px-4 flex items-center gap-2 text-primary-dark font-medium font-un-bounded text-xs bg-primary-extra-light glass-card dark:text-primary-light dark:border-none hover:bg-primary-light hover:cursor-pointer "
          >
            Resume <ResumeIcon className="w-5 h-5 dark:fill-primary-light" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
