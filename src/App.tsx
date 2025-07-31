import { useState } from "react";

import {
  Navigation,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "./components";
import { useScrollSpy, useTheme } from "./hooks";
import { NAV_ITEMS, SECTION_IDS } from "./utils/constants";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme(true);

  useScrollSpy(SECTION_IDS, setActiveSection);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-stone-50 text-stone-800"
      }
    >
      <Navigation
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero darkMode={darkMode} scrollToSection={scrollToSection} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
