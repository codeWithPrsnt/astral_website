import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Main from "@/components/Main";

const HOMEPAGE_QUERY = gql`
  {
    pages(where: { name: "Homepage" }) {
      nodes {
        homepage {
          banners {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannersTitle
            bannerDescription
            bannerButton {
              title
              url
              target
            }
          }
          homeAboutTitle
          homeAboutSubtitle
          homeAboutButton {
            target
            title
            url
          }
          homeAboutVideoImage {
            node {
              sourceUrl
            }
          }
          homeAboutVideoUrl
          homeAboutDescription
          homeCategoryTitle
          homeCategorySubtitle
          homeServicesTitle
          homeServicesSubtitle
          homeColoursTitle
          homeColoursSubtitle
          homeColoursButton {
            target
            title
            url
          }
          homeJoinBackgroundImage {
            node {
              sourceUrl
            }
          }
          homeJoinTitle
          homeJoinSubtitle
          homeJoinButton {
            target
            title
            url
          }
          homeJoinDescription
          blogTitle
          blogSubtitle
          categories {
            link
            title
            image {
              node {
                sourceUrl
              }
            }
          }
        }
        seo {
          canonical
          metaKeywords
          metaDesc
          title
          opengraphType
          opengraphSiteName
          opengraphTitle
          opengraphDescription
          opengraphUrl
          schema {
            raw
          }
          opengraphImage {
            mediaItemUrl
          }
        }
      }
    }
    allColourCategory(where: { slug: "popular" }) {
      nodes {
        name
        colours {
          nodes {
            title
            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
        slug
        title
        date
      }
    }
  }
`;

export default function Home({ homepageData }) {
  return <Main homepageData={homepageData} />;
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      homepageData: data,
    },
  };
}