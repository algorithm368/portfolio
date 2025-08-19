// Data definitions
const education = {
  title: "Education",
  items: [
    {
      degree: "B.Eng. Computer Engineering",
      school: "Naresuan University",
      details: "Expected 2026 • GPA: 3.37",
    },
  ],
};

const certifications = {
  title: "Certifications",
  items: [
    { name: "CEPT B1", date: "Nov 2023" },
    { name: "Google Cybersecurity", date: "July 2024" },
    { name: "NSCA Basic Cybersecurity", date: "Aug 2024" },
  ],
};

const skills = {
  title: "Skills",
  categories: [
    {
      name: "Programming",
      items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "Bash"],
    },
    {
      name: "Web & Tools",
      items: [
        "React",
        "React Native",
        "Vite",
        "Next.js",
        "Vue.js",
        "Node.js",
        "Git",
        "AWS",
        "MySQL",
      ],
    },
  ],
};

// Card component
function InfoCard({
  title,
  children,
  darkMode,
}: {
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
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
        {title}
      </h3>
      {children}
    </div>
  );
}

function About({ darkMode }: { darkMode: boolean }) {
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
          <InfoCard title={education.title} darkMode={darkMode}>
            <div className="space-y-6">
              {education.items.map((edu, idx) => (
                <div key={idx}>
                  <h4
                    className={`font-normal text-lg mb-2 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className={`font-light ${
                      darkMode ? "text-gray-400" : "text-stone-500"
                    }`}
                  >
                    {edu.school}
                  </p>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>
          {/* Certifications */}
          <InfoCard title={certifications.title} darkMode={darkMode}>
            <div className="space-y-6">
              {certifications.items.map((cert, idx) => (
                <div key={idx}>
                  <h4
                    className={`font-normal mb-1 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className={`text-sm font-light ${
                      darkMode ? "text-gray-500" : "text-stone-400"
                    }`}
                  >
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>
          {/* Skills */}
          <InfoCard title={skills.title} darkMode={darkMode}>
            <div className="space-y-8">
              {skills.categories.map((cat, idx) => (
                <div key={idx}>
                  <h4
                    className={`font-normal mb-4 ${
                      darkMode ? "text-gray-200" : "text-stone-700"
                    }`}
                  >
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((skill) => (
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
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default About;
