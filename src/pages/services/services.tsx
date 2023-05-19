import React, { ReactElement } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbCertificate2 } from "react-icons/tb";

import Link from "next/link";
import { DoctorCard } from "~/components/DoctorCard";
import { UserLayout } from "~/layouts/UserLayout";
import { NextPageWithLayout } from "../_app";
const ServicePage: NextPageWithLayout = () => {
  return (
    <>
      <div className="mt-20 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="lg:flex lg:justify-center ">
          <div className="p-10 lg:w-[450px]">
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
        <div className="flex h-full w-full">
          <Image
            src="/images/backgrounds/ts.jpg"
            alt="NewYorkCityTaxis-Curb"
            width="1000"
            height="1000"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="h-20 lg:flex lg:justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="m-2 flex w-56 ">
              <AiFillStar className="text-2xl" />
              <h1 className="ml-2">
                <span className="font-semibold text-black">Thousand</span> of
                doctors and specialists
              </h1>
            </div>
            <div className="m-2 flex w-48 ">
              <FaThumbsUp className="text-xl" />
              <h1 className="ml-2">95% patient satisfaction</h1>
            </div>
            <div className="m-2 flex w-56 ">
              <AiFillStar className="text-2xl" />
              <h1 className="ml-2">
                <span className="font-semibold text-black">$25,000,000+</span>{" "}
                saved by patients
              </h1>
            </div>
            <div className="m-2 flex w-48">
              <FaThumbsUp className="text-xl" />
              <h1 className="ml-2 font-bold">4.3 on Trustpilot</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 flex ">
        <div className="w-1/4 bg-slate-50 ">
          <div className="m-3 shadow-2xl">
            <div className="sidmap p-4">
              <div className="availability">
                <div className="flex">
                  <AiOutlineClockCircle className="mt-[2px]" />
                  <h2 className="ml-2">AVAILABILITY</h2>
                </div>
                <div className=" lg:flex lg:justify-center">
                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="m-1 rounded-none  bg-slate-200 p-3 text-black shadow-lg hover:bg-white"
                    >
                      Any
                    </Link>
                    <Link
                      href="#"
                      className="m-1 rounded-none bg-white p-3 text-black shadow-lg hover:bg-slate-100"
                    >
                      Next 2 Hours
                    </Link>
                    <Link
                      href="#"
                      className="m-1 flex items-center justify-center rounded-none bg-white text-black shadow-lg hover:bg-slate-100"
                    >
                      Today
                    </Link>
                  </div>
                </div>
                <Link
                  href="#"
                  className="m-2 ml-5 flex w-32 items-center justify-center rounded-none bg-white p-3 text-black shadow-lg hover:bg-slate-100"
                >
                  Next 3 Days
                </Link>
              </div>
              <div className="CREDENTIALS mt-8">
                <div className="flex">
                  <TbCertificate2 className="mt-[2px]" />
                  <h2 className="ml-2">CREDENTIALS</h2>
                </div>
                <div className=" lg:ml-5 lg:flex">
                  <div className="flex justify-center">
                    <Link
                      href="#"
                      className="m-1 rounded-none  bg-slate-200 p-3 text-black shadow-lg hover:bg-white"
                    >
                      Any
                    </Link>
                    <Link
                      href="#"
                      className="m-1 rounded-none bg-white p-3 text-black shadow-lg hover:bg-slate-100"
                    >
                      NP
                    </Link>
                    <Link
                      href="#"
                      className="m-1 flex items-center justify-center rounded-none bg-white p-3 text-black shadow-lg hover:bg-slate-100"
                    >
                      MD
                    </Link>
                  </div>
                </div>
              </div>
              <div className="PROVIDERSPECIALTY mt-8">
                <div className="flex">
                  <TbCertificate2 className="mt-[2px]" />
                  <h2 className="ml-2">PROVIDER SPECIALTY</h2>
                </div>
                <div className="mt-3 flex items-center ">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">
                    Adult health.
                  </label>
                </div>
                <div className="mt-3 flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">
                    Dermatology.
                  </label>
                </div>
                <div className="mt-3 flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">
                    Family medicine.
                  </label>
                </div>
                <div className="mt-3 flex items-center ">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">
                    Emergency medicine
                  </label>
                </div>
                <div className="mt-3 flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">
                    Internal medicine
                  </label>
                </div>
                <div className="mt-3 flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-9 h-4 w-4 rounded-none border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label className="text-md ml-2 text-black">Pediatrics</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-slate-50 ">
          <div className="p-10">
            <h1 className="font-lyft mt-1 text-4xl font-bold">
              Best telehealth appointments available now
            </h1>
            <div className="my-5">
              <DoctorCard />
            </div>
            <div className="my-5">
              <DoctorCard />
            </div>
            <div className="my-5">
              <DoctorCard />
            </div>
            <div className="my-5">
              <DoctorCard />
            </div>
            <div className="my-5">
              <DoctorCard />
            </div>
            <div className="my-5">
              <DoctorCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ServicePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default ServicePage;
