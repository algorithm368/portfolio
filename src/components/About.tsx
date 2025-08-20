import Header from "./commons/Header";

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
  readonly title: string;
  readonly children: React.ReactNode;
  readonly darkMode: boolean;
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

function About({ darkMode }: { readonly darkMode: boolean }) {
  return (
    <section
      id="about"
      className={`py-32 ${darkMode ? "bg-gray-800/30" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Header darkMode={darkMode} text="About" subText="Who I am and what I do" />
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <InfoCard title={education.title} darkMode={darkMode}>
            <div className="space-y-6">
              {education.items.map((edu) => (
                <div key={edu.degree + edu.school}>
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
          
          {/* Skills */}
          <InfoCard title={skills.title} darkMode={darkMode}>
            <div className="space-y-8">
              {skills.categories.map((cat) => (
                <div key={cat.name}>
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
