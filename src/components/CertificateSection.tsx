import Header from "./commons/Header";
import Section from "./commons/Section";
import CertificateBox from "./CertificateBox";

const certificates = [
  {
    title: "Cybersecurity Foundation Course",
    issuer: "National Cyber Security Agency, Thailand",
    date: "September 2024",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/certificate_thnca_basic.png",
    link: "https://learn.thnca.or.th/pluginfile.php/1/tool_certificate/issues/1727340221/8845561337SC.pdf",
  },
  {
    title: "Cybersecurity Professional Course",
    issuer: "National Cyber Security Agency, Thailand",
    date: "September 2025",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/certificate_thnca_professional.png",
    link: "https://learn.thnca.or.th/pluginfile.php/1/tool_certificate/issues/1727439376/7781097879SC.pdf",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    date: "July 2024",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/certificate_coursera_basic.jpeg",
    link: "https://coursera.org/share/34ca72e7c45c432228ce64330d774429",
  },
  {
    title: "Basic Cybersecurity",
    issuer: "National Cyber Security Agency, Thailand",
    date: "August 2024",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/certificate_mooc_basic.png",
    link: "https://media.mooc.ncsa.or.th/certificate/98D4ZNPRXCFI5.pdf",
  },
];

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
