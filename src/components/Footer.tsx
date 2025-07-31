interface FooterProps {
  readonly darkMode: boolean;
}

function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-12 border-t ${
        darkMode
          ? "border-gray-700 bg-gray-900"
          : "border-stone-200 bg-stone-50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p
          className={`font-light ${
            darkMode ? "text-gray-400" : "text-stone-500"
          }`}
        >
          © 2025 Siriwat Chairak. Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
