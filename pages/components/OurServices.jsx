import React from "react";

export default function OurServices() {
  return (
    <div className="w-full mt-64">
      <h2 className="mb-4 text-4xl text-center font-header-medium">
        Our Services
      </h2>
      <h3 className="mb-8 text-3xl text-black max-w-md mx-auto text-center font-header">
        No job is too big or too small for us. We got you covered.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl my-16 gap-x-12   gap-y-12 px-6 md:px-auto mx-auto">
        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/handyman-services.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Handyman Services
            </h2>
            <p className="text-grey mt-1">
              The bulk of maintenance comes from home repairs. Our services
              include total house repairs, anything that needs to be fixed, we
              can handle. Our expert handyman can make your home feel brand-new
              again.
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/electrical.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Electrical and Appliance
            </h2>
            <p className="text-grey mt-1">
              Damaged electronics and appliances can be frustrating. Our
              maintenance includes checking that all of your items, including
              washing machines, air conditioning units, home entertainment
              systems, dishwashers, and more, are in good working order.
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/plumbing.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Plumbing
            </h2>
            <p className="text-grey mt-1">
              Damaged electronics and appliances can be frustrating. Our
              maintenance includes checking that all of your items, including
              washing machines, air conditioning units, home entertainment
              systems, dishwashers, and more, are in good working order.
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/painting.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Painting
            </h2>
            <p className="text-grey mt-1">
              Damaged electronics and appliances can be frustrating. Our
              maintenance includes checking that all of your items, including
              washing machines, air conditioning units, home entertainment
              systems, dishwashers, and more, are in good working order.
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/fire-and-water-damage.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Fire and Water Damage
            </h2>
            <p className="text-grey mt-1">
              Damaged electronics and appliances can be frustrating. Our
              maintenance includes checking that all of your items, including
              washing machines, air conditioning units, home entertainment
              systems, dishwashers, and more, are in good working order.
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4">
          <img
            className="hidden md:block self-center h-20"
            src="/heating-and-ac.svg"
          />
          <div className="text-center md:text-left">
            <h2 className="font-header-medium text-2xl text-secondary">
              Heating and A/C
            </h2>
            <p className="text-grey mt-1">
              Damaged electronics and appliances can be frustrating. Our
              maintenance includes checking that all of your items, including
              washing machines, air conditioning units, home entertainment
              systems, dishwashers, and more, are in good working order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
