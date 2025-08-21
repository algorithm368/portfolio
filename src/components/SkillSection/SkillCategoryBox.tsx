import * as FaIcons from "react-icons/fa";

interface SkillCategoryBoxProps {
  darkMode: boolean;
  category: string;
  skills: { name: string; icon: keyof typeof FaIcons }[];
}

const containerClass =
  "skill-category group relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 w-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 cursor-pointer overflow-hidden";

const gradientClass =
  "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700";

const categoryTitleClass = "text-2xl font-bold mb-6";

const skillTagClass =
  "skill-tag w-full px-4 py-2 text-sm font-medium rounded-full border border-white/20 bg-white/10 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-lg transition";

function SkillCategoryBox({
  category,
  skills,
}: Readonly<SkillCategoryBoxProps>) {
  return (
    <div className={containerClass}>
      <div className={gradientClass}></div>
      <h3 className={categoryTitleClass}>{category}</h3>
      <div className="flex flex-col gap-3">
        {[...skills]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill) => {
            const IconComponent = FaIcons[skill.icon];
            return (
              <span key={skill.name} className={skillTagClass}>
                {IconComponent && (
                  <IconComponent className="inline mr-2 text-base" />
                )}
                {skill.name}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default SkillCategoryBox;
