import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
  const { inventoryJson } = data;
  const image = getImage(data.inventoryJson.image);
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={inventoryJson.title}>
          <HeaderOne />
          <PageBanner title={inventoryJson.title} name="Inventory" />
          <GatsbyImage image={image} alt={inventoryJson.title} />
          <ProtfolioDetails details={inventoryJson} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InventoryTemplate;
