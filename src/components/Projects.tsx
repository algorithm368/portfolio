/**
 * Props for the ProjectBox component.
 * @property darkMode - Whether dark mode is enabled.
 * @property reverse - If true, reverses the layout direction.
 * @property title - The project title.
 * @property description - The project description.
 * @property techs - Array of technologies used in the project.
 * @property role - The role or type of project.
 * @property kanji - Kanji character to display if no image is provided.
 * @property img - Optional image URL for the project.
 */
interface ProjectBoxProps {
  darkMode: boolean;
  reverse?: boolean;
  title: string;
  description: string;
  techs: string[];
  role: string;
  kanji: string;
  img?: string;
}

/**
 * Renders a single project card with image or kanji, description, tech stack, and role.
 * @param props - ProjectBoxProps
 */
function ProjectBox({
  darkMode,
  reverse,
  title,
  description,
  techs,
  role,
  kanji,
  img,
}: Readonly<ProjectBoxProps>) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        darkMode ? "hover:bg-gray-800/20" : "hover:bg-white"
      } p-8 transition-all duration-500`}
      style={reverse ? { direction: "rtl" } : {}}
    >
      <div
        className={`h-80 flex items-center justify-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {img ? (
          <img src={img} alt={title} className="object-contain h-60 w-60" />
        ) : (
          <div
            className={`text-8xl font-extralight opacity-20 ${
              darkMode ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            {kanji}
          </div>
        )}
      </div>
      <div style={reverse ? { direction: "ltr" } : {}}>
        <h3
          className={`text-2xl font-light tracking-wide mb-6 ${
            darkMode ? "text-gray-100" : "text-stone-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-lg font-light leading-relaxed mb-8 ${
            darkMode ? "text-gray-400" : "text-stone-500"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          {techs.map((tech) => (
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
          {role}
        </div>
      </div>
    </div>
  );
}

/**
 * Props for the Projects component.
 * @property darkMode - Whether dark mode is enabled.
 */
interface ProjectsProps {
  readonly darkMode: boolean;
}

/**
 * Renders the Projects section with a list of project cards.
 * @param props - ProjectsProps
 */
function Projects({ darkMode }: ProjectsProps) {
  return (
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
          <ProjectBox
            darkMode={darkMode}
            title="Competency Database Website"
            description="Fullstack web application with React.js frontend and Node.js backend featuring RESTful APIs and responsive UI design."
            techs={["React.js", "Tailwind", "Node.js", "TypeScript"]}
            role="Team Project"
            kanji="竹"
          />
          <ProjectBox
            darkMode={darkMode}
            reverse
            title="Courses Management Website"
            description="React-based course management system with Bootstrap styling and responsive table implementation for CRUD operations."
            techs={["React", "Bootstrap", "Javascript"]}
            role="Team Project"
            kanji="松"
          />
          <ProjectBox
            darkMode={darkMode}
            title="Deposit System Project"
            description="Desktop application built with Python and PyQt5, implementing data structures and algorithms for efficient UI software."
            techs={["Python", "PyQt5", "DSA"]}
            role="Collaborator"
            kanji="梅"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
