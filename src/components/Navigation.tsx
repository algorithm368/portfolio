import { Moon, Sun, Menu, X } from "lucide-react";
import { THEME } from "../utils/theme";

interface NavigationProps {
  readonly navItems: { id: string; label: string }[];
  readonly activeSection: string;
  readonly setActiveSection: (section: string) => void;
  readonly darkMode: boolean;
  readonly toggleDarkMode: () => void;
  readonly scrollToSection: (sectionId: string) => void;
  readonly mobileMenuOpen: boolean;
  readonly setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({
  navItems,
  activeSection,
  setActiveSection,
  darkMode,
  toggleDarkMode,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const theme = darkMode ? THEME.dark : THEME.light;
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${theme.navBg} backdrop-blur-lg border-b`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className={`font-light text-2xl tracking-wider ${THEME.light.logo} dark:${THEME.dark.logo}`}
          >
            志利和
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-light text-sm tracking-wide transition-all duration-300 ${
                  theme.navHover
                } ${
                  activeSection === item.id ? theme.navActive : theme.navText
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-stone-100 text-stone-600"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-stone-100"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-300 ${theme.navBorder}`}
          >
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-light tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? `${theme.navMobileActiveText} ${theme.navMobileActive}`
                      : `${theme.navMobileText} ${theme.navMobileHover}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
