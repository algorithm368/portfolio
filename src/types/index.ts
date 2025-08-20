export type SectionId = "hero" | "about" | "projects" | "contact" | "certificates";

export interface NavItem {
  id: SectionId;
  label: string;
}
