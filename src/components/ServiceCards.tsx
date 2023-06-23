import React, { FC } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaTeethOpen } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { FaAllergies } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
export const ServiceCards: FC = () => {
  return (
    <>
      <div className="mx-0 flex flex-wrap justify-center md:mx-0 lg:mx-28">
        <Link
          href="/specialities/doctor"
          className="flex-basis-0 m-4 w-60 flex-shrink-0 flex-grow-0 rounded-lg bg-white p-4 shadow-lg hover:bg-gray-200"
        >
          <div className="h-52 p-1">
            <div className="flex justify-between">
              <h2 className="font-lyft text-xl text-black">Dentist</h2>
              <BsArrowRight className="text-3xl font-semibold text-black" />
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <FaTeethOpen className="text-7xl font-semibold text-gray-800" />
            </div>
          </div>
        </Link>
        <Link
          href="/specialities/doctor"
          className="flex-basis-0 m-4 w-60 flex-shrink-0 flex-grow-0 rounded-lg bg-white p-4 shadow-lg hover:bg-gray-200"
        >
          <div className="h-52 p-1">
            <div className="flex justify-between">
              <h2 className="font-lyft text-xl text-black">Heart Surgeon</h2>
              <BsArrowRight className="text-3xl font-semibold text-black" />
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <BsHeartPulse className="text-7xl font-semibold text-gray-800" />
            </div>
          </div>
        </Link>
        <Link
          href="/specialities/doctor"
          className="flex-basis-0 m-4 w-60 flex-shrink-0 flex-grow-0 rounded-lg bg-white p-4 shadow-lg hover:bg-gray-200"
        >
          <div className="h-52 p-1">
            <div className="flex justify-between">
              <h2 className="font-lyft text-xl text-black">Allergy Doctor</h2>
              <BsArrowRight className="text-3xl font-semibold text-black" />
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <FaAllergies className="text-7xl font-semibold text-gray-800" />
            </div>
          </div>
        </Link>
        <Link
          href="/specialities/doctor"
          className="flex-basis-0 m-4 w-60 flex-shrink-0 flex-grow-0 rounded-lg bg-white p-4 shadow-lg hover:bg-gray-200"
        >
          <div className="h-52 p-1">
            <div className="flex justify-between">
              <h2 className="font-lyft text-xl text-black">General Doctor</h2>
              <BsArrowRight className="text-3xl font-semibold text-black" />
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <TbStethoscope className="text-7xl font-semibold text-gray-800" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
