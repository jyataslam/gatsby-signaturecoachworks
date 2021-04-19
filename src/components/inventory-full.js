import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const InventoryFull = () => {
  const { sectionContent } = PortfolioHomeData;
  const data = useStaticQuery(
    graphql`
      query {
        fadeBgImg: file(relativePath: { eq: "stormtrooper-bw-min.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const fadeBgImg = getImage(data.fadeBgImg);

  return (
    <section className="commonSection porfolio">
      <GatsbyImage
        image={fadeBgImg}
        alt="background image"
        className="opaque__bg-image"
      />
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {PortfolioData.map((post, index) => (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  key={index}
                  style={{ paddingBottom: "3rem" }}
                >
                  <PortfolioCard data={post} />
                  <Link to={post.url}>
                    <h6 className="sales__single">{post.title}</h6>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default InventoryFull;
