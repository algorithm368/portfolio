function Section({
  children,
  darkMode,
  pattern,
  id,
}: {
  readonly children: React.ReactNode;
  readonly darkMode: boolean;
  readonly pattern: string;
  readonly id: string;
}) {
  let className = "";

  if (pattern === "odd") {
    className = `${darkMode ? "bg-gray-900" : "bg-stone-50"}`;
  } else {
    className = `${darkMode ? "bg-gray-800/30" : "bg-white"}`;
  }

  return (
    <section className={`py-32 ${className}`} id={id}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default Section;
