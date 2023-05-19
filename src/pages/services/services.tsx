import React from "react";
import Image from "next/image";
const services = () => {
  return (
    <>
      <div className="h-96 bg-black"></div>
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="lg:flex lg:justify-center ">
          <div className="p-10 md:p-5 lg:w-[450px]">
            <h1 className="font-lyft mt-1 text-4xl font-bold ">
              Find the best price for great online doctor visits.{" "}
              <span className="text-blue-700"> Pay direct to save.</span>
            </h1>
            <p className="mt-5 text-base ">
              Affordable, hassle-free telehealth appointments from quality
              healthcare providers on your schedule. No membership fees, no
              surprise bills, no insurance needed.
            </p>
            <button className="my-5 flex w-44 items-center justify-center rounded-none bg-blue-700 p-4 font-semibold text-white hover:bg-blue-400">
              Book Online
            </button>
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center">
          <div className="absoluteh-full w-full overflow-hidden">
            <Image
              src="/images/backgrounds/ts.jpg"
              alt="NewYorkCityTaxis-Curb"
              width="1000"
              height="1000"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
