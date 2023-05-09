import React from 'react'

export default function Landing() {
  return (
    <div id="#" className="pt-32 h-screen flex flex-row max-w-7xl px-2 mx-auto gap-4 overflow-hidden">
        <div className="basis-full md:basis-2/3 h-full flex flex-col justify-between">
          <div className="basis-3/4 flex flex-col justify-center gap-2 mt-6">
            <h1 className="font-header-medium text-5xl md:text-6xl text-black">
              Your <span className="">Trusted Partner</span> for 
              Exceptional Property <span className="font-header-bold text-secondary"> Maintenance Services</span>
            </h1>
            <h2 className="text-md md:text-lg text-grey">
              We provide top-quality property maintenance solutions tailored to
              meet your needs. With years of experience in the industry, we take
              pride in delivering reliable and professional services to
              homeowners and businesses alike.
            </h2>
            <button className="mt-6 w-max self-start text-xl bg-primary px-5 py-2">
              Let's talk
            </button>
          </div>
          <div className="basis-1/4 flex text-md md:text-lg self-center md:self-start items-end pb-6">
            <p>Trusted by 100+ property owners in South Florida</p>
          </div>
        </div>
        <div className="hidden md:block md:basis-1/3 m-8 rounded-3xl overflow-hidden">
          <img className="h-full object-cover" src="/handyman4.jpg" />
        </div>
      </div>
  )
}
