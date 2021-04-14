const AppNavbar = () => {
  return (
    <nav className="bg-primary bg-opacity-75 sticky top-0 z-50 p-3  flex md:gap-8 gap-4 items-center justify-center ">
      <a href="#about" className="p-2 rounded hover:bg-white">
        About
      </a>
      <a href="#skills" className="p-2 rounded hover:bg-white">
        Skills
      </a>
      <a href="#projects" className="p-2 rounded hover:bg-white">
        Projects
      </a>
      <a href="#articles" className="p-2 rounded hover:bg-white">
        Articles
      </a>
    </nav>
  );
};

export default AppNavbar;
