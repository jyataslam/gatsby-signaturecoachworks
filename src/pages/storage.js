import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceTwo from "@/components/service-two";
import StorageCustom from "@/components/storage-custom";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const StoragePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Storage">
          <HeaderOne />
          <PageBanner title="Storage" name="Storage" />
          <StorageCustom />
          <CallToActionOne extraClassName="ready" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default StoragePage;
