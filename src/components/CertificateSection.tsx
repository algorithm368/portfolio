import CertificateBox from "./CertificateBox";
import Header from "./commons/Header";

const certificates = [
  {
    title: "Cybersecurity Foundation Course",
    issuer: "National Cyber Security Agency, Thailand",
    date: "September 2024",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/project_trading.png",
    link: "https://learn.thnca.or.th/pluginfile.php/1/tool_certificate/issues/1727340221/8845561337SC.pdf",
  },
  {
    title: "Cybersecurity Professional Course",
    issuer: "National Cyber Security Agency, Thailand",
    date: "September 2025",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/project_trading.png",
    link: "https://learn.thnca.or.th/pluginfile.php/1/tool_certificate/issues/1727439376/7781097879SC.pdf",
  },
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "July 2025",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/project_trading.png",
  },
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "July 2025",
    description:
      "Completed an advanced React course covering hooks, context, and performance optimization.",
    img: "/portfolio/project_trading.png",
  },
];

function CertificateSection({ darkMode }: { readonly darkMode: boolean }) {
  return (
    <section
      id="certificates"
      className={`py-32 ${darkMode ? "bg-gray-800/30" : "bg-white"}`}
    >
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
    </section>
  );
}

export default CertificateSection;
