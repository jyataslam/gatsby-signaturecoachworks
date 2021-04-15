import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Quote from "@/components/quote";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ProtfolioDetails from "@/components/protfolio-details";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

export const query = graphql`
  query($slug: String!) {
    inventoryJson(slug: { eq: $slug }) {
      title
      price
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

const InventoryTemplate = ({ data }) => {
  console.log(data);
  const { inventoryJson } = data;
  const image = getImage(data.inventoryJson.image);
  console.log("inventory image", image);
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={inventoryJson.title}>
          <Quote />
          <HeaderOne />
          <PageBanner title={inventoryJson.title} name="Sales" />
          <GatsbyImage image={image} alt={inventoryJson.title} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InventoryTemplate;
