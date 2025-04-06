import { Link } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import { ResumeIcon } from "../assets/Svg";
import { navLinks } from "../utils/navBar";
import { useEffect, useState } from "react";

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
      className={`hidden lg:block px-5 py-6 transition-transform duration-300 sticky top-0 z-10 ${
        isVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <nav
        className={`container shadow-bg-shadow mx-auto border-primary-light  px-5 py-6 border rounded-2xl flex justify-between items-center w-full ${
          isVisible ? "bg-white/50 backdrop-blur-xl" : "bg-white"
        }`}
      >
        <Link to={RoutePaths.ROOT}>
          <p className="text-primary-dark font-medium font-un-bounded text-sm">
            Micheal Tolu Francis
          </p>
          <p className="text-black text-xs ">Front-end Developer</p>
        </Link>

        <div className=" flex gap-6 items-center text-xs">
          {navLinks.map((link) => (
            <a
              href={link.path}
              className="text-black font-un-bounded"
              key={link.path}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://docs.google.com/document/d/1iIdww24Y-5S4D81YegynBu1a5UAAsVwL/edit?usp=sharing&ouid=113946696695913699684&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-primary-light rounded-2xl h-12 px-4 flex items-center gap-4 text-primary-dark font-medium font-un-bounded text-xs bg-primary-extra-light hover:bg-primary-light hover:cursor-pointer "
          >
            Resume <ResumeIcon className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
