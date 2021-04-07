import React from "react";
import { ContactInfosBlock } from "@/data";
import "@/css/contact-info.css";
import locationImg from "@/images/contact-info/shop-inside-min.jpg";

const ContactInfos = () => {
  const { subTitle, title, description } = ContactInfosBlock;
  return (
    <section className="commonSection client_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
            <img src={locationImg} alt="shop front" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
