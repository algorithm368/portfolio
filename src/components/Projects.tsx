import ProjectBox from "./ProjectBox";

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
            img="/portfolio/project_competency.png"
          />
          <ProjectBox
            darkMode={darkMode}
            reverse
            title="Courses Management Website"
            description="React-based course management system with Bootstrap styling and responsive table implementation for CRUD operations."
            techs={["React", "Bootstrap", "Javascript"]}
            role="Team Project"
            kanji="松"
            img="/portfolio/project_course.png"
          />
          <ProjectBox
            darkMode={darkMode}
            reverse
            title="Covid-19 USA Dashboard"
            description="React-based dashboard for visualizing COVID-19 data in the USA, featuring charts and responsive design."
            techs={["React", "MUI", "Javascript"]}
            role="Team Project"
            kanji="松"
            img="/portfolio/project_covid.png"
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
