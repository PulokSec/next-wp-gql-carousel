import { gql } from "@apollo/client";
import Head from "next/head";
import BodyItems from "../components/BodyItems";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { client } from "../lib/apollo";

export default function Home({ posts }) {
  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>Carousel Template</title>
        <link rel="icon" href="favicon.svg"></link>
      </Head>

      <NavBar />
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
  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
