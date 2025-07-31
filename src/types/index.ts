export type SectionId = "hero" | "about" | "projects" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}
