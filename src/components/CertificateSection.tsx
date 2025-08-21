import Header from "./commons/Header";
import Section from "./commons/Section";
import CertificateBox from "./CertificateBox";
import { certificates } from "../utils/certificateData";

function CertificateSection({ darkMode }: { readonly darkMode: boolean }) {
  return (
    <Section id="certificates" darkMode={darkMode} pattern="even">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Header
          darkMode={darkMode}
          text="Certificates"
          subText="My achievements and completed courses"
        />
        <div className="grid gap-8 grid-cols-1">
          {certificates.map((cert, idx) => (
            <div key={cert.title + idx}>
              <CertificateBox {...cert} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CertificateSection;
