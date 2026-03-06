export type ProjectStatus = "live" | "building" | "beta" | "placeholder";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  audience: string;
  features: string[];
  status: ProjectStatus;
  stack: string[];
  url?: string;
  screenshot?: string;
}
