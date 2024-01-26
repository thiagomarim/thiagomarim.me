import { About } from "./components/pages/home/about";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { MyKnowledge } from "./components/pages/home/my-knowledge";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
      }
      highlightProjects {
        thumbnail {
          url
        }
        title
        date
        shortDescription
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  }
`;
  return fetchHygraphQuery(query);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <About aboutInfo={pageData} />
      <MyKnowledge techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
    </>
  );
}
