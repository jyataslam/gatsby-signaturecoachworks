import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import logo from "@/images/logo/logo-blue-min.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "@/css/sales.css";

const AboutTwo = () => {
  const { sectionContent, button, gallery } = AboutTwoData;
  const data = useStaticQuery(
    graphql`
      query {
        salesBgImage: file(
          relativePath: { eq: "stormtrooper-exterior-min.jpeg" }
        ) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const image = getImage(data.salesBgImage);

  return (
    <section className="commonSection ab_agency sales_two_section">
      <GatsbyImage
        image={image}
        alt="stormtrooper coach from signature coachworks"
        className="opaque__bg-image"
      />
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="PR_79">
            <h4 className="sub_title">SALES</h4>
            <h2 className="sec_title MB_45">We offer consignment sales</h2>
            <p className="sec_desc color_ededed">
              All sales coaches come with a full inspection of the coach from
              our facility. Upgrades and remodels are easily completed onsite.
            </p>
            <Link className="common_btn red_bg blue_bg" to="/sales">
              <span>Search Inventory</span>
            </Link>
          </Col>
          <Col lg={6} md={12} sm={12} className="sales__container">
            <div className="sales__container-inner">
              <h3>Available upgrades on coach sales:</h3>
              <ul>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
                <li>Put Upgrade Here</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
