import "tailwindcss/tailwind.css";

import Articles from "./components/Articles";
import About from "./components/About";
import Footer from "./components/Footer";
import AppNavbar from "./components/AppNavbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col h-screen ">
      <AppNavbar />
      <main className=" flex-1 overflow-x-auto overflow-y-auto divide-y ">
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Footer />
      </main>
    </div>
  );
}

export default App;
