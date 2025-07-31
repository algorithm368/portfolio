import { useEffect } from "react";

/**
 * Custom hook to update the active section based on scroll position.
 * @param sectionIds Array of section IDs to observe
 * @param setActiveSection Callback to set the active section
 * @param offset Optional offset in px (default: 100)
 */
export function useScrollSpy(
  sectionIds: string[],
  setActiveSection: (section: string) => void,
  offset: number = 100
) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, setActiveSection, offset]);
}
