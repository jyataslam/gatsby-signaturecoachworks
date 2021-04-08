import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import ParallaxOne from "@/components/parallax-1";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import ContactInfos from "@/components/contact-infos";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import GoogleMap from "@/components/google-map";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne />
          <SliderOne />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <AboutTwo />
          <ServiceTwo />
          <ContactInfos />
          <TestimonialsOneCarousel />
          <TrustedClient />
          <ParallaxOne />
          <PortfolioHome />
          <GoogleMap extraClass="contact-page" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
