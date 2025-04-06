import { Link, useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import { useEffect, useState } from "react";
import { navLinks } from "../utils/navBar";
import { Close, LinkedInIcon, MailIcon, XIcon } from "../assets/Svg";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Hide navbar on scroll down, show on scroll up
    if (currentScrollY > 0 && currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void => {
    e.preventDefault();
    const [path, hash] = href.split("#");

    if (path === location.pathname) {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <header
      className={`lg:hidden px-5 py-6 transition-transform duration-300 sticky top-0 z-10 ${
        isVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <nav
        className={`container shadow-bg-shadow mx-auto border-primary-light px-5 py-6 border rounded-2xl flex justify-between items-center w-full ${
          isVisible ? "bg-white/50 backdrop-blur-xl" : "bg-white"
        }`}
      >
        <Link to={RoutePaths.ROOT}>
          <p className="text-primary-dark font-medium font-un-bounded text-sm">
            Micheal Tolu Francis
          </p>
          <p className="text-black text-xs">Front-end Developer</p>
        </Link>
        <button
          onClick={toggleSidebar}
          className="flex flex-col rounded-lg items-center justify-center w-10 h-10"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1" : "mb-1.5"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          />
        </button>
      </nav>

      <div className="fixed inset-0 h-screen pointer-events-none z-10">
        <div
          className={`flex relative flex-col justify-end rounded-t-2xl h-full px-5 transition-transform duration-100 ease-in-out pointer-events-auto ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[150%] opacity-0"
          }`}
        >
          <div
            className={`bg-black/30 absolute inset-0 transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 backdrop-blur-[2px]"
                : "backdrop-blur-[0px] opacity-0"
            }`}
            onClick={toggleSidebar}
          />
          <div className="shadow-bg-shadow bg-white w-full pt-8 pb-6 px-5 relative rounded-t-2xl z-20 space-y-6">
            <button
              onClick={toggleSidebar}
              className="outline-none bg-primary-extra-light hover:bg-primary-light border border-primary-light p-2 rounded-full absolute top-4 right-4"
            >
              <Close />
            </button>
            <div>
              <p className="text-primary-dark font-medium font-un-bounded text-sm leading-3">
                Micheal Tolu Francis
              </p>
              <a
                href="mail:francismicheal609@gmail.com"
                className="text-primary-medium text-xs"
              >
                francismicheal609@gmail.com
              </a>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleClick(e, link.path)}
                  className="text-black text-sm block"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href="https://docs.google.com/document/d/1tVFgayImx4C9-QIvqNNgWnFSUTuOLG0dTIWqIxbJNHQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm text-primary-medium"
              >
                Resume
              </a>
              <span className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/micheal-francis-frontend-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  title="LinkedIn Profile"
                  className="rounded-full border border-primary-dark h-6 w-6 flex items-center justify-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-[#0073b1] hover:scale-105"
                >
                  <LinkedInIcon className="group-hover:fill-white w-3 h-3" />
                </a>
                <a
                  aria-label="Follow me on Twitter/X"
                  title="Twitter/X Profile"
                  href="https://x.com/tolu_mich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary-dark h-6 w-6 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                >
                  <XIcon className="group-hover:fill-white w-3 h-3" />
                </a>
                <a
                  aria-label="Send me an email"
                  title="Email Me"
                  href="mailto:francismicheal609@gmail.com"
                  className="rounded-full border border-primary-dark h-6 w-6 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                >
                  <MailIcon className="w-3 h-3 group-hover:fill-white" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
