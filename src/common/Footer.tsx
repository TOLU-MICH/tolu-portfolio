import ThemeToggler from "./ThemeToggler";

const Footer = () => {
  return (
    <footer className="text-sm py-7 lg:py-15 container mx-auto px-5 glass-card">
      <div className="flex items-center justify-between flex-wrap mb-4">
        <h5 className="font-un-bounded font-medium ">Micheal Tolu Francis</h5>
        <ThemeToggler />
      </div>

      <p>© 2025 Micheal Tolu Francis. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
