import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import { THEME } from "../utils/theme";

interface HeroProps {
  readonly darkMode: boolean;
  readonly scrollToSection: (sectionId: string) => void;
}

const contactInfo = [
  { icon: Phone, value: "061-361-3628" },
  { icon: Mail, value: "siriwat.chr@gmail.com" },
  { icon: MapPin, value: "Phitsanulok, Thailand" },
];

const heroContent = {
  firstName: "Siriwat",
  lastName: "Chairak",
  title: "Aspiring Fullstack Developer",
  description:
    "A passionate and fast-learning computer engineering student seeking an internship opportunity as a Fullstack Web Developer.",
};

function ContactItem({
  icon: Icon,
  value,
}: {
  readonly icon: React.ElementType;
  readonly value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4" />
      <span>{value}</span>
    </div>
  );
}

function Hero({ darkMode, scrollToSection }: HeroProps) {
  const theme = darkMode ? THEME.dark : THEME.light;
  return (
    <section
      id="hero"
      className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${
          darkMode
            ? theme.navBg.split(" ")[0]
            : "bg-gradient-to-br from-stone-50 via-stone-100 to-emerald-50/30"
        }`}
      ></div>

      {/* Zen circle decoration */}
      <div
        className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full border opacity-5 ${
          darkMode ? theme.navBorder : "border-emerald-200"
        }`}
      ></div>
      <div
        className={`absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border opacity-5 ${
          darkMode ? theme.navBorder : "border-emerald-200"
        }`}
      ></div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <div
              className={`inline-block w-24 h-1 mb-8 ${
                darkMode ? theme.navActive : "bg-emerald-500"
              }`}
            ></div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light mb-8 tracking-wider">
            <span
              className={`${
                darkMode ? theme.projectBoxText : theme.projectBoxText
              }`}
            >
              {heroContent.firstName}
            </span>
            <br />
            <span
              className={`${
                darkMode ? theme.projectBoxAccent : theme.projectBoxAccent
              } font-extralight`}
            >
              {heroContent.lastName}
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl mb-12 font-light tracking-wide ${
              darkMode ? theme.navText : theme.navText
            }`}
          >
            {heroContent.title}
          </p>

          <p
            className={`text-lg sm:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light ${
              darkMode ? "text-gray-400" : "text-stone-500"
            }`}
          >
            {heroContent.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-sm font-light ${
              darkMode ? "text-gray-400" : "text-stone-500"
            }`}
          >
            {contactInfo.map((info, idx) => (
              <React.Fragment key={info.value}>
                <ContactItem icon={info.icon} value={info.value} />
                {idx < contactInfo.length - 1 && (
                  <div
                    className={`hidden sm:block w-1 h-1 rounded-full ${
                      darkMode ? theme.navBorder : "bg-stone-400"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
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
  );
}

export default Hero;
