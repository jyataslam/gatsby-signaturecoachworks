import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { Link } from "gatsby";

const PortfolioHome = () => {
  const { sectionContent } = PortfolioHomeData;
  return (
    <section className="commonSection porfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.filter((post, index) => index < 3).map(
                (post, index) => (
                  <Col lg={4} md={6} sm={12} key={index}>
                    <PortfolioCard data={post} />
                  </Col>
                )
              )}
              <Col lg={12} className="text-center">
                <Link className="common_btn red_bg" to="/sales">
                  <span>All Inventory</span>
                </Link>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
