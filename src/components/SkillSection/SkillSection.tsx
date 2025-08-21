import Header from "../commons/Header";
import Section from "../commons/Section";
import SkillCategoryBox from "./SkillCategoryBox";
import { skillsData } from "../../utils/skillsData";

function SkillSection({ darkMode }: { readonly darkMode: boolean }) {
  return (
    <Section darkMode={darkMode} pattern="even" id="skills">
      <Header
        darkMode={darkMode}
        text="Skills"
        subText="A snapshot of my technical expertise"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillsData.map((item, idx) => (
          <SkillCategoryBox
            key={item.category + idx}
            darkMode={darkMode}
            category={item.category}
            skills={item.skills}
          />
        ))}
      </div>
    </Section>
  );
}

export default SkillSection;
