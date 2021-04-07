import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About">
          <HeaderOne />
          <PageBanner title="About Us" name="About" />
          <AboutOne />
          <TestimonialsOneCarousel regularPadding="regular_padding" />
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
