import React from "react";
import CTA from "./CTA";

export default function Nav() {
  return (
    <>
      <nav
        className={`fixed flex-col top-0 min-w-screen w-full inline-flex justify-center h-32 font-header bg-white`}
      >
        <CTA />
        <div className="flex flex-col md:flex-row justify-between w-full h-full items-center self-center px-0 md:px-12 overflow-hidden">
          <img className="h-full py-5 max-h-[85px] h-auto" src="/rclark_logo2b.png" />
          <div className="inline-flex gap-8 items-center">
            <a href="#">Why Us?</a>
            <a href="#">Our Services</a>
            <button className="bg-primary text-secondary px-5 py-2">
              <a href="#">Contact Us</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
