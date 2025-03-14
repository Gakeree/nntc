import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import WhatsApp from "../common/WhatsApp";
import ScrollToTopButton from "../common/ScrollToTopButton";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <WhatsApp />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
