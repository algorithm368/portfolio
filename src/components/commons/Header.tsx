function Header({
  darkMode,
  text,
  subText,
}: {
  readonly darkMode: boolean;
  readonly text: string;
  readonly subText: string;
}) {
  return (
    <div className="text-center mb-20">
      <div
        className={`inline-block w-16 h-1 mb-8 ${
          darkMode ? "bg-emerald-400" : "bg-emerald-500"
        }`}
      ></div>
      <h2
        className={`text-4xl font-light tracking-wider mb-6 ${
          darkMode ? "text-gray-100" : "text-stone-800"
        }`}
      >
        {text}
      </h2>
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {subText}
      </p>
    </div>
  );
}

export default Header;
