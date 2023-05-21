import { gql } from "@apollo/client";
import Head from "next/head";
import BodyItems from "../components/BodyItems";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { client } from "../lib/apollo";
import reverse from "../components/utls";

export default function Home({ posts, navMenuItems }) {
  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>Carousel Template</title>
        <link rel="icon" href="favicon.svg"></link>
      </Head>

      <NavBar navMenu={navMenuItems} />
      <main role="main">
        <CarouselComponent carousels={posts} />
        <BodyItems bodyItems={posts} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          carousels {
            carouselHead
            carouselText
            midBodyHeadFirst
            midBodyHeadSecond
            midBodyText
            upperBodyHead
            upperBodyText
            labelId
          }
        }
      }
    }
  `;
  const Get_Nav_Menu = gql`
    query GetNavItem {
      navmenu {
        nodes {
          navmenuItem {
            navmenuItem
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });

  const navMenu = await client.query({
    query: Get_Nav_Menu,
  });

  const posts = reverse(response?.data?.posts?.nodes);
  const navMenuItems = reverse(navMenu?.data?.navmenu?.nodes);
  return {
    props: {
      posts,
      navMenuItems,
    },
  };
}
