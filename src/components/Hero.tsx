import { Phone, Mail, MapPin } from "lucide-react";

interface HeroProps {
  readonly darkMode: boolean;
  readonly scrollToSection: (sectionId: string) => void;
}

function Hero({ darkMode, scrollToSection }: HeroProps) {
  return (
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
  );
}

export default Hero;
