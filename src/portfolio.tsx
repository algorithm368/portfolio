import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        darkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-stone-50 text-stone-800"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          darkMode
            ? "bg-gray-900/80 border-gray-700"
            : "bg-stone-50/80 border-stone-200"
        } backdrop-blur-lg border-b`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-light text-2xl tracking-wider text-emerald-600 dark:text-emerald-400">
              椅楽
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-light text-sm tracking-wide transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 ${
                    activeSection === item.id
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-stone-600 dark:text-gray-300"
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
              className={`md:hidden border-t transition-all duration-300 ${
                darkMode ? "border-gray-700" : "border-stone-200"
              }`}
            >
              <div className="px-2 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-light tracking-wide transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                        : "text-stone-600 dark:text-gray-300 hover:bg-stone-100 dark:hover:bg-gray-800"
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

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gray-900"
              : "bg-gradient-to-br from-stone-50 via-stone-100 to-emerald-50/30"
          }`}
        ></div>

        {/* Zen circle decoration */}
        <div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full border opacity-5 ${
            darkMode ? "border-gray-600" : "border-emerald-200"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border opacity-5 ${
            darkMode ? "border-gray-600" : "border-emerald-200"
          }`}
        ></div>

        <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fadeInUp">
            <div className="mb-8">
              <div
                className={`inline-block w-24 h-1 mb-8 ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-500"
                }`}
              ></div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-wider">
              <span
                className={`${darkMode ? "text-gray-100" : "text-stone-800"}`}
              >
                Siriwat
              </span>
              <br />
              <span
                className={`${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                } font-extralight`}
              >
                Chairak
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl mb-12 font-light tracking-wide ${
                darkMode ? "text-gray-300" : "text-stone-600"
              }`}
            >
              Aspiring Fullstack Developer
            </p>

            <p
              className={`text-lg sm:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light ${
                darkMode ? "text-gray-400" : "text-stone-500"
              }`}
            >
              A passionate and fast-learning computer science student seeking an
              internship opportunity as a Fullstack Web Developer.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-sm font-light ${
                darkMode ? "text-gray-400" : "text-stone-500"
              }`}
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>061-361-3628</span>
              </div>
              <div
                className={`hidden sm:block w-1 h-1 rounded-full ${
                  darkMode ? "bg-gray-600" : "bg-stone-400"
                }`}
              ></div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>siriwatc65@nu.ac.th</span>
              </div>
              <div
                className={`hidden sm:block w-1 h-1 rounded-full ${
                  darkMode ? "bg-gray-600" : "bg-stone-400"
                }`}
              ></div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Phitsanulok, Thailand</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-10 py-4 font-light tracking-wide transition-all duration-500 transform hover:scale-105 ${
                  darkMode
                    ? "bg-emerald-500 hover:bg-emerald-400 text-gray-900"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                } shadow-lg hover:shadow-2xl`}
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-10 py-4 border font-light tracking-wide transition-all duration-500 transform hover:scale-105 ${
                  darkMode
                    ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900"
                    : "border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-32 ${darkMode ? "bg-gray-800/30" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div
              className={`inline-block w-16 h-1 mb-8 ${
                darkMode ? "bg-emerald-400" : "bg-emerald-500"
              }`}
            ></div>
            <h2
              className={`text-4xl font-light tracking-wider mb-6 ${
                darkMode ? "text-gray-100" : "text-stone-800"
              }`}
            >
              About
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Education */}
            <div
              className={`p-10 transition-all duration-500 hover:transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-800/70"
                  : "bg-stone-50 hover:bg-white hover:shadow-lg"
              }`}
            >
              <div
                className={`w-12 h-12 mb-8 flex items-center justify-center ${
                  darkMode ? "bg-emerald-400/20" : "bg-emerald-100"
                }`}
              >
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-emerald-400" : "bg-emerald-500"
                  }`}
                ></div>
              </div>
              <h3
                className={`text-xl font-light tracking-wide mb-8 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4
                    className={`font-normal text-lg mb-2 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    B.Eng. Computer Engineering
                  </h4>
                  <p
                    className={`font-light ${
                      darkMode ? "text-gray-400" : "text-stone-500"
                    }`}
                  >
                    Naresuan University
                  </p>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    Expected 2026 • GPA: 3.37
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              className={`p-10 transition-all duration-500 hover:transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-800/70"
                  : "bg-stone-50 hover:bg-white hover:shadow-lg"
              }`}
            >
              <div
                className={`w-12 h-12 mb-8 flex items-center justify-center ${
                  darkMode ? "bg-emerald-400/20" : "bg-emerald-100"
                }`}
              >
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-emerald-400" : "bg-emerald-500"
                  }`}
                ></div>
              </div>
              <h3
                className={`text-xl font-light tracking-wide mb-8 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Certifications
              </h3>
              <div className="space-y-6">
                <div>
                  <h4
                    className={`font-normal mb-1 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    CEPT B1
                  </h4>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    Nov 2023
                  </p>
                </div>
                <div>
                  <h4
                    className={`font-normal mb-1 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Google Cybersecurity
                  </h4>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    July 2024
                  </p>
                </div>
                <div>
                  <h4
                    className={`font-normal mb-1 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    NSCA Basic Cybersecurity
                  </h4>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    Aug 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div
              className={`p-10 transition-all duration-500 hover:transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-800/70"
                  : "bg-stone-50 hover:bg-white hover:shadow-lg"
              }`}
            >
              <div
                className={`w-12 h-12 mb-8 flex items-center justify-center ${
                  darkMode ? "bg-emerald-400/20" : "bg-emerald-100"
                }`}
              >
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-emerald-400" : "bg-emerald-500"
                  }`}
                ></div>
              </div>
              <h3
                className={`text-xl font-light tracking-wide mb-8 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Skills
              </h3>
              <div className="space-y-8">
                <div>
                  <h4
                    className={`font-normal mb-4 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Programming
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Python",
                      "Java",
                      "C",
                      "C++",
                      "JavaScript",
                      "TypeScript",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 text-xs font-light tracking-wide ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4
                    className={`font-normal mb-4 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Web & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Node.js", "Git", "AWS", "MySQL"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 text-xs font-light tracking-wide ${
                            darkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-32 ${darkMode ? "bg-gray-900" : "bg-stone-50"}`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div
              className={`inline-block w-16 h-1 mb-8 ${
                darkMode ? "bg-emerald-400" : "bg-emerald-500"
              }`}
            ></div>
            <h2
              className={`text-4xl font-light tracking-wider mb-6 ${
                darkMode ? "text-gray-100" : "text-stone-800"
              }`}
            >
              Projects
            </h2>
          </div>

          <div className="space-y-20">
            {/* Project 1 */}
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                darkMode ? "hover:bg-gray-800/20" : "hover:bg-white"
              } p-8 transition-all duration-500`}
            >
              <div
                className={`h-80 flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`text-8xl font-extralight opacity-20 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  竹
                </div>
              </div>
              <div>
                <h3
                  className={`text-2xl font-light tracking-wide mb-6 ${
                    darkMode ? "text-gray-100" : "text-stone-800"
                  }`}
                >
                  Competency Database Website
                </h3>
                <p
                  className={`text-lg font-light leading-relaxed mb-8 ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Fullstack web application with React.js frontend and Node.js
                  backend featuring RESTful APIs and responsive UI design.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["React.js", "Tailwind", "Node.js", "TypeScript"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 text-xs font-light tracking-wide ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div
                  className={`text-sm font-light ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Team Project
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                darkMode ? "hover:bg-gray-800/20" : "hover:bg-white"
              } p-8 transition-all duration-500`}
            >
              <div className="order-2 lg:order-1">
                <h3
                  className={`text-2xl font-light tracking-wide mb-6 ${
                    darkMode ? "text-gray-100" : "text-stone-800"
                  }`}
                >
                  Courses Management Website
                </h3>
                <p
                  className={`text-lg font-light leading-relaxed mb-8 ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  React-based course management system with Bootstrap styling
                  and responsive table implementation for CRUD operations.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["React", "Bootstrap", "CRUD"].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 text-xs font-light tracking-wide ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`text-sm font-light ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Team Project
                </div>
              </div>
              <div
                className={`order-1 lg:order-2 h-80 flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`text-8xl font-extralight opacity-20 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  松
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                darkMode ? "hover:bg-gray-800/20" : "hover:bg-white"
              } p-8 transition-all duration-500`}
            >
              <div
                className={`h-80 flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`text-8xl font-extralight opacity-20 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  梅
                </div>
              </div>
              <div>
                <h3
                  className={`text-2xl font-light tracking-wide mb-6 ${
                    darkMode ? "text-gray-100" : "text-stone-800"
                  }`}
                >
                  Deposit System Project
                </h3>
                <p
                  className={`text-lg font-light leading-relaxed mb-8 ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Desktop application built with Python and PyQt5, implementing
                  data structures and algorithms for efficient UI software.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["Python", "PyQt5", "DSA"].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 text-xs font-light tracking-wide ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`text-sm font-light ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Collaborator
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-32 ${darkMode ? "bg-gray-800/30" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div
              className={`inline-block w-16 h-1 mb-8 ${
                darkMode ? "bg-emerald-400" : "bg-emerald-500"
              }`}
            ></div>
            <h2
              className={`text-4xl font-light tracking-wider mb-6 ${
                darkMode ? "text-gray-100" : "text-stone-800"
              }`}
            >
              Contact
            </h2>
            <p
              className={`text-lg font-light ${
                darkMode ? "text-gray-400" : "text-stone-500"
              }`}
            >
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div
                  className={`p-4 ${
                    darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                  }`}
                >
                  <Mail
                    className={`w-6 h-6 ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-normal mb-2 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:siriwatc65@nu.ac.th"
                    className={`font-light ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-700"
                    } transition-colors duration-300`}
                  >
                    siriwatc65@nu.ac.th
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div
                  className={`p-4 ${
                    darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                  }`}
                >
                  <Phone
                    className={`w-6 h-6 ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-normal mb-2 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:061-361-3628"
                    className={`font-light ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-700"
                    } transition-colors duration-300`}
                  >
                    061-361-3628
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div
                  className={`p-4 ${
                    darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                  }`}
                >
                  <MapPin
                    className={`w-6 h-6 ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-normal mb-2 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    Location
                  </h3>
                  <p
                    className={`font-light ${
                      darkMode ? "text-gray-400" : "text-stone-500"
                    }`}
                  >
                    Mueang Phitsanulok District
                    <br />
                    Phitsanulok 65000
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3
                  className={`font-normal mb-6 ${
                    darkMode ? "text-gray-200" : "text-stone-700"
                  }`}
                >
                  Connect
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className={`p-4 transition-all duration-300 hover:transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-4 transition-all duration-300 hover:transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Zen Quote/Message */}
            <div
              className={`p-12 ${darkMode ? "bg-gray-800/50" : "bg-stone-50"}`}
            >
              <div className="text-center">
                <div
                  className={`text-6xl font-extralight mb-8 opacity-20 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  道
                </div>
                <p
                  className={`text-lg font-light leading-relaxed italic ${
                    darkMode ? "text-gray-300" : "text-stone-600"
                  }`}
                >
                  "The way is not in the sky.
                  <br />
                  The way is in the heart."
                </p>
                <div
                  className={`w-12 h-1 mx-auto mt-8 ${
                    darkMode ? "bg-emerald-400" : "bg-emerald-500"
                  }`}
                ></div>
                <p
                  className={`mt-6 font-light ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Let's create something meaningful together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t ${
          darkMode
            ? "border-gray-700 bg-gray-900"
            : "border-stone-200 bg-stone-50"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p
            className={`font-light ${
              darkMode ? "text-gray-400" : "text-stone-500"
            }`}
          >
            © 2024 Siriwat Chairak. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${darkMode ? "#1f2937" : "#f5f5f4"};
        }

        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? "#059669" : "#10b981"};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? "#047857" : "#047857"};
        }

        /* Selection color */
        ::selection {
          background: ${darkMode ? "#059669" : "#10b981"};
          color: ${darkMode ? "#111827" : "#ffffff"};
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid ${darkMode ? "#059669" : "#10b981"};
          outline-offset: 2px;
        }

        /* Zen-inspired hover effects */
        .zen-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .zen-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Japanese-inspired text effects */
        .kanji-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          h1 {
            font-size: 3rem;
            line-height: 1.1;
          }

          h2 {
            font-size: 2rem;
          }
        }

        /* Enhanced gradient animations */
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Zen breathing animation for decorative elements */
        .zen-breathe {
          animation: zenBreathe 6s ease-in-out infinite;
        }

        @keyframes zenBreathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        /* Matcha-inspired button hover effects */
        .matcha-button {
          position: relative;
          overflow: hidden;
        }

        .matcha-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s;
        }

        .matcha-button:hover::before {
          left: 100%;
        }

        /* Enhanced mobile experience */
        @media (max-width: 768px) {
          .mobile-spacing {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .mobile-text {
            font-size: 0.875rem;
            line-height: 1.5;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }

          body {
            font-size: 12pt;
            line-height: 1.4;
            color: #000;
            background: #fff;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
