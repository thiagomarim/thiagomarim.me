import { Metadata } from "next";
import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectList } from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata: Metadata = {
  title: "Projetos | thiagomarim.me ",
  description: "Portfolio do Thiago Soares Marim",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `;

  return fetchHygraphQuery(query);
};

export default async function Projects() {
  const { projects } = await getPageData();
  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  );
}
