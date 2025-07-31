interface AboutProps {
  readonly darkMode: boolean;
}

function About({ darkMode }: AboutProps) {
  return (
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
                    "Bash",
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
                  {["React", "Node.js", "Git", "AWS", "MySQL"].map((skill) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;