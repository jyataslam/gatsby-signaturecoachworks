import React from "react";
import { Link } from "gatsby";

const PageBanner = ({ title, name }) => {
  return (
    <section className="pageBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                <Link to="/">home</Link> - {name}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
