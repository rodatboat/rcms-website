import React from 'react'

export default function WhyUs() {
  return (
    <div className="w-full">
        {/* <div className=" pt-32">
          <h2 className="mb-8 text-4xl text-center font-header-medium">Our Story</h2>
          <div className="flex flex-row gap-12 px-6 md:px-12">
            <div className="hidden md:block basis-1/3 rounded-3xl overflow-hidden">
              <img className="h-full object-cover" src="/handyman3.webp" />
            </div>
            <p className="basis--full md:basis-2/3 text-md text-grey self-center">
              <strong>RClark Maintenance Services LLC.</strong> is your trusted property
              maintenance partner with over <strong>10 years of experience</strong>. From minor
              repairs to major renovations, we have handled a wide range of
              property issues with expertise and reliability. Our meticulous
              attention to detail ensures that every task is completed to the
              <strong> highest standards</strong>. Whether it's <strong>plumbing, electrical work,
              painting, or carpentry</strong>, we bring a wealth of knowledge and
              hands-on experience to every job. Client satisfaction is our
              priority, and we strive to build strong relationships based on
              trust and exceptional service.
            </p>
          </div>
        </div> */}

        <h2 className="mt-64 mb-8 text-4xl text-center font-header-medium">
          Why Choose Us?
        </h2>
        <div className="pt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <h3 className="text-2xl text-black font-bold">
              Expertise and Experience
            </h3>
            <p className="mt-2 text-grey text-md">
              With a wealth of knowledge and expertise in property maintenance,
              we are equipped to handle a wide range of tasks, from routine
              maintenance to complex repairs. Our team consists of skilled
              professionals who are committed to delivering the highest
              standards of workmanship.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-black font-bold">
              Reliable and Timely
            </h3>
            <p className="mt-2 text-grey text-md">
              We value your time and understand the importance of prompt
              service. When you choose us, you can rely on us
              to arrive on schedule, complete the work efficiently, and adhere
              to agreed timelines. We respect your property and ensure a clean
              and tidy work area.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-black font-bold">
              Attention to Detail
            </h3>
            <p className="mt-2 text-grey text-md">
              We understand that every property is unique, and we pay meticulous
              attention to detail to ensure that every task is completed to
              perfection. From the initial consultation to the final touches, we
              prioritize precision and quality, leaving no room for compromise.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-black font-bold">
              Customer Satisfaction
            </h3>
            <p className="mt-2 text-grey text-md">
              Your satisfaction is our utmost priority. We strive to exceed your
              expectations by delivering exceptional results and providing a
              seamless customer experience. We listen to your needs, offer
              expert advice, and work closely with you to transform your vision
              into reality.
            </p>
          </div>
        </div>
      </div>
  )
}
