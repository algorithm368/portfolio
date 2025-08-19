import { THEME } from "../utils/theme";
import { useState } from "react";

// =======================
// ProjectBox Props
// =======================
interface ProjectBoxProps {
  darkMode: boolean;
  reverse?: boolean;
  title: string;
  description: string;
  techs: string[];
  role: string;
  kanji: string;
  img?: string;
  link?: string;
}

// =======================
// ProjectBox Component
// =======================
function ProjectBox({
  darkMode,
  reverse,
  title,
  description,
  techs,
  role,
  kanji,
  img,
  link,
}: Readonly<ProjectBoxProps>) {
  const [modalOpen, setModalOpen] = useState(false);
  const theme = darkMode ? THEME.dark : THEME.light;

  return (
    // =======================
    // Card Container
    // =======================
    <section
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } 
        items-center rounded-xl shadow-lg overflow-hidden transition-all duration-500
        ${theme.projectBoxBg}`}
      style={{ minHeight: "20rem" }}
    >
      {/* =======================
          Image / Kanji Section
      ======================= */}
      <div className="flex-1 flex items-center justify-center h-80">
        {img ? (
          <>
            {/* Project Image */}
            <img
              src={img}
              alt={title}
              className="p-4 h-80 w-80 object-contain cursor-zoom-in"
              draggable={false}
              onClick={() => setModalOpen(true)}
            />
            {/* Modal for Enlarged Image */}
            {modalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                onClick={() => setModalOpen(false)}
                style={{ cursor: "zoom-out" }}
              >
                <img
                  src={img}
                  alt={title}
                  className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 ${theme.projectBoxModalBorder}`}
                  draggable={false}
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  className="absolute top-8 right-8 text-white text-4xl font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(false);
                  }}
                  aria-label="Close image modal"
                  type="button"
                >
                  &times;
                </button>
              </div>
            )}
          </>
        ) : (
          // Kanji Fallback
          <div
            className={`text-8xl font-extralight opacity-20 ${theme.projectBoxKanji}`}
          >
            {kanji}
          </div>
        )}
      </div>

      {/* =======================
          Details Section
      ======================= */}
      <div className="flex-1 flex flex-col justify-center px-8 py-6">
        {/* Header: Title & Link */}
        <header>
          <h3
            className={`text-2xl font-light tracking-wide mb-4 ${theme.projectBoxText}`}
          >
            {title}
          </h3>
          {/* Project Link Button */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-4 inline-block px-4 py-2 text-xs font-light tracking-wide rounded 
                ${theme.projectBoxLinkBg} ${theme.projectBoxLinkText} ${theme.projectBoxLinkHover} transition`}
            >
              View Project
            </a>
          )}
        </header>

        {/* Description */}
        <p
          className={`text-lg font-light leading-relaxed mb-6 ${
            darkMode ? "text-gray-400" : "text-stone-500"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 mb-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className={`px-4 py-2 text-xs font-light tracking-wide rounded 
                ${theme.projectBoxTechBg} ${theme.projectBoxTechText}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        <div className={`text-sm font-light ${theme.projectBoxRole}`}>
          {role}
        </div>
      </div>
    </section>
  );
}

// =======================
// Export
// =======================
export default ProjectBox;
