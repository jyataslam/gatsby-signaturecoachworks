import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import InventoryFull from "@/components/inventory-full";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";

const InventoryPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Inventory">
          <Quote />
          <HeaderOne />
          <PageBanner title="Inventory" name="Inventory" />
          <InventoryFull />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InventoryPage;
