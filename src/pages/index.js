import React from "react";
import Layout from "@/components/layout";
import Quote from "@/components/quote";
import Footer from "@/components/footer";
import SalesTwo from "@/components/sales-two";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import ContactInfos from "@/components/contact-infos";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import ServiceTwo from "@/components/service-two";
import About from "@/components/about-hero";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderTwo from "@/components/slider-two";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Premier Coach Repair">
          <Quote />
          <HeaderOne />
          <SliderTwo />
          <About />
          <ServiceTwo />
          <ContactInfos />
          <TestimonialsOneCarousel />
          <TrustedClient />
          <SalesTwo />
          <PortfolioHome />
          {/* <GoogleMap extraClass="contact-page" /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
