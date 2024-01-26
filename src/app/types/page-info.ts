import { KnownTech, Project } from "./project";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  socials: Social[];
  knownTechs: KnownTech[];
  highlightProjects: Project[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type HomePageData = {
  page: HomePageInfo;
};
