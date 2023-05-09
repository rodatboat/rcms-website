import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import WhyUs from "../components/WhyUs";

export { Page };

function Page() {
  return (
    <>
      <Nav />
      <Landing />
      <WhyUs />
      <div className="w-full mt-16">
        <h2 className="mb-4 text-4xl text-center font-header-medium">
          Our Services
        </h2>
        <h3 className="mb-8 text-3xl text-black max-w-md mx-auto text-center font-header">
          No job is too big or too small for us. We got you covered.
        </h3>
        <div className="grid grid-cols-2">

        </div>
      </div>
    </>
  );
}
