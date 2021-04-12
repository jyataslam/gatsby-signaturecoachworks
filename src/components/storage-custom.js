import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StoragePageData } from "@/data";
import "@/css/service.css";

const StorageCustom = () => {
  const { title, subTitle, text } = StoragePageData;
  return (
    <section className="service_section storage_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc color_aaa color_333">{text}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StorageCustom;
