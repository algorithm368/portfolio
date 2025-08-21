import React, { useState } from "react";

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  img?: string;
  darkMode: boolean;
  link?: string;
}

const CertificateBox: React.FC<CertificateProps> = ({
  title,
  issuer,
  date,
  description,
  img,
  darkMode,
  link,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-shadow duration-200 shadow-md mb-6 hover:shadow-xl p-6 flex flex-col md:flex-row items-center
        ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-gray-100"
            : "bg-white border-gray-800 text-gray-900"
        }
      `}
    >
      {img && (
        <>
          <button
            type="button"
            className="p-0 border-none bg-transparent cursor-zoom-in"
            onClick={() => setModalOpen(true)}
            aria-label={`Enlarge certificate image for ${title}`}
          >
            <img
              src={img}
              alt={title}
              className="w-48 h-32 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8 pointer-events-none"
              draggable={false}
            />
          </button>
          {modalOpen && (
            <button
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={() => setModalOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                  setModalOpen(false);
                }
              }}
              aria-label="Close certificate image modal"
              type="button"
              tabIndex={0}
              style={{ cursor: "zoom-out" }}
            >
              <button
                type="button"
                tabIndex={0}
                aria-label={`Close certificate image modal`}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (
                    e.key === "Escape" ||
                    e.key === "Enter" ||
                    e.key === " "
                  ) {
                    e.stopPropagation();
                    setModalOpen(false);
                  }
                }}
                style={{
                  outline: "none",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                <img
                  src={img}
                  alt={title}
                  className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4"
                  draggable={false}
                />
              </button>
              <button
                className="absolute top-8 right-8 text-white text-4xl font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
                aria-label="Close certificate image modal"
                type="button"
              >
                &times;
              </button>
            </button>
          )}
        </>
      )}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              darkMode
                ? "bg-emerald-700 text-emerald-200"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {issuer}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {date}
          </span>
        </div>
        {description && (
          <p className="text-base leading-relaxed mb-2">{description}</p>
        )}
        {link && (
          <div className="flex justify-end mt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition`}
            >
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateBox;
