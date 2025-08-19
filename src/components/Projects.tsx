import ProjectBox from "./ProjectBox";
import { projects } from "../utils/productsData";

interface ProjectsProps {
  readonly darkMode: boolean;
}

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
          {projects.map((project) => (
            <ProjectBox
              key={project.title}
              darkMode={darkMode}
              title={project.title}
              description={project.description}
              techs={project.techs}
              role={project.role}
              kanji={project.kanji}
              img={project.img}
              reverse={project.reverse}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
