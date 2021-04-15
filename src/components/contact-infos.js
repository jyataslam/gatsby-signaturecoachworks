import React from "react";
import { ContactInfosBlock } from "@/data";
import "@/css/contact-info.css";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import GoogleMap from "@/components/google-map.js";

const ContactInfos = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "shop-inside-min.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const shopImage = data.shopImage.childImageSharp.fluid;
  const { subTitle, title, description } = ContactInfosBlock;
  return (
    <section className="commonSection client_2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 order-2-mobile">
            <GoogleMap extraClass="location-section" />
          </div>
          <div className="col-lg-6 col-sm-12 text-left location-section__text">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
            {/* <BackgroundImage
              fluid={shopImage}
              backgroundColor={`#040e18`}
              className="location__image"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
