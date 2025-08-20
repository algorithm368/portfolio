import Header from "./commons/Header";
import Section from "./commons/Section";
import { THEME } from "../utils/theme";

function SkillSection({ darkMode }: { readonly darkMode: boolean }) {
  return (
    <Section darkMode={darkMode} pattern="even" id="skills">
      <Header darkMode={darkMode} text="Skills" subText="What I can do" />
      <div />
    </Section>
  );
}

export default SkillSection;
