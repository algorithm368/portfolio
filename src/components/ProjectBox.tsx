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

import { useState } from "react";

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
  const [modalOpen, setModalOpen] = useState(false);

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
          <>
            {/*
              If your image is in src/assets, import it at the top of the file:
              import myImg from '../assets/myimg.png';
              Then use: img={myImg}
              If your image is in public/, use: img="/myimg.png"
            */}
            <img
              src={img}
              alt={title}
              className="p-4 h-80 w-80 object-contain cursor-zoom-in"
              draggable={false}
              onClick={() => setModalOpen(true)}
            />
            {modalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                onClick={() => setModalOpen(false)}
                style={{ cursor: "zoom-out" }}
              >
                <img
                  src={img}
                  alt={title}
                  className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
                  draggable={false}
                  onClick={e => e.stopPropagation()}
                />
                <button
                  className="absolute top-8 right-8 text-white text-4xl font-bold"
                  onClick={e => {
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

export default ProjectBox;
