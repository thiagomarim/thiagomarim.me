export type KnownTech = {
  iconSvg: string;
  name: string;
};

export type Project = {
  thumbnail: {
    url: string;
  };
  title: string;
  date: string;
  shortDescription: string;
  technologies: KnownTech[];
  liveProjectUrl?: string;
  githubUrl?: string;
};
