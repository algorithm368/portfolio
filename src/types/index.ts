export type SectionId = "hero" | "skills" | "projects" | "contact" | "certificates";

export interface NavItem {
  id: SectionId;
  label: string;
}
