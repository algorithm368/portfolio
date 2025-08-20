import ProjectBox from "./ProjectBox";
import Header from "./commons/Header";
import { projects } from "../utils/projectsData";

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
        <Header
          darkMode={darkMode}
          text="Projects"
          subText="My work and contributions"
        />
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
