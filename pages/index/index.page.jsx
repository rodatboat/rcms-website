import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import WhyUs from "../components/WhyUs";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

export { Page };

function Page() {
  return (
    <>
      <Nav />
      <Landing />
      <WhyUs />
      <OurServices />
      <Footer />
    </>
  );
}
