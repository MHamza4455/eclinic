import { GetServerSideProps } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { prisma } from "lib/prisma";
import { NextPageWithLayout } from "../../_app";
import { UserLayout } from "~/layouts/UserLayout";
import React from "react";
import { Specialty, Service } from "@prisma/client";
import { Prisma, PrismaClient } from "@prisma/client";
import Image from "next/image";
import Footer from "~/components/footer";
const avatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

interface DoctorData {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
  };
  title: string;
  licenseNumber: string;
  address: string;
  experience: number;
  fees: number;
  discount: number;
  isVerified: boolean;
  allowBooking: boolean;
  specialties: Specialty[];
  services: Service[];
}
const DoctorDetail: NextPageWithLayout = ({
  doctor,
}: {
  doctor: DoctorData;
}) => {
  // Access the router to get the doctor's id from the URL
  const router = useRouter();
  const { id } = router.query;

  const [showService, setShowService] = useState(true);

  const handleServiceClick = () => {
    setShowService(true);
  };

  const handleAvailabilityClick = () => {
    setShowService(false);
  };

  const [showServices, setShowServices] = useState(false);

  const handleServicesClick = () => {
    setShowServices(!showServices);
  };

  return (
    <>
      <div className="mt-36">
        <div className="flex justify-center">
          <h1 className="w-11/12 text-center text-5xl font-bold">
            {" "}
            Doctors Detail{" "}
          </h1>
        </div>
      </div>

      <div className="flex w-screen items-center justify-center p-5 ring-2 ">
        <div className="w-3/4 bg-slate-50 p-5 shadow-xl">
          <div className="flex w-full">
            <div className="first w-3/4">
              <span className="sm:text-1xl overflow-hidden text-ellipsis whitespace-nowrap font-bold capitalize md:text-2xl">
                {doctor.user.firstName} {doctor.user.lastName}
              </span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base capitalize">
                <h3 className="sm:text-md font-medium md:text-lg">
                  {doctor.title}
                </h3>
              </span>
            </div>
            <div className="second w-1/4">
              <div className="relative inline-block">
                {avatar ? (
                  <Image
                    width={500}
                    height={500}
                    className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
                    src={avatar}
                    alt="Image Description"
                  />
                ) : (
                  <span className="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-300">
                    <svg
                      className="h-full w-full text-gray-300"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.62854"
                        y="0.359985"
                        width="15"
                        height="15"
                        rx="7.5"
                        fill="white"
                      />
                      <path
                        d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex w-full p-2 underline">Telehealth visit</div>
          <div className=" cursor-pointer p-3" onClick={handleServicesClick}>
            <div className="flex h-10 w-full flex-row items-center justify-between p-5">
              <div className="w-10/12 font-bold"> SPECIALITIES</div>
              <div className="w-2/12 text-2xl"> {showServices ? "-" : "+"}</div>
            </div>
          </div>
          {showServices && (
            <div className="p-3">
              <h1 className="text-green-900">
                {" "}
                {doctor.specialties.map((specialty) => (
                  <p key={specialty.id}>{specialty.name}</p>
                ))}
              </h1>
            </div>
          )}

          <div className="flex w-full pt-5">
            <div
              className={`first flex h-14 w-2/4 items-center justify-center border-2 border-blue-900 bg-blue-700 ${
                showService ? "bg-blue-700" : "bg-blue-900"
              }`}
              onClick={handleServiceClick}
            >
              <h1 className="font-bold text-white sm:text-sm md:text-lg">
                SERVICE DETAILS
              </h1>
            </div>
            <div
              className={`second flex h-14 w-2/4 items-center justify-center border-2 border-blue-900 bg-blue-700 ${
                showService ? "bg-blue-900" : "bg-blue-700"
              }`}
              onClick={handleAvailabilityClick}
            >
              <h1 className="font-bold text-white sm:text-sm md:text-lg">
                AVAILABILITY
              </h1>
            </div>
          </div>
          <div>
            {showService ? (
              <div className="w-full pt-5 ">
                <div className="border-2 bg-stone-100">
                  <h1 className="font-semibold sm:text-sm md:text-lg">
                    {" "}
                    Prerequisites:
                  </h1>
                  <li className="md:text-md mx-2 font-normal sm:text-sm ">
                    {" "}
                    NEW PATIENT ONLY{" "}
                  </li>
                </div>
                <h2 className="p-2 font-normal sm:text-xs md:text-sm">
                  {" "}
                  Video visit with a doctor or nurse. Common visit reasons
                  include sore throat, cold & flu, UTI, infection (skin, ear,
                  eye, bladder, and more), Covid care, or any other health
                  concern.
                </h2>
                <div className="flex w-full flex-col">
                  <div className="flex w-full flex-row">
                    <div className="w-1/2 pt-2">
                      Included
                      <ul className="px-3 text-xs">
                        <li>Referral to specialist</li>
                        <li>Prescription, if recommended</li>
                      </ul>
                    </div>
                    <div className="w-1/2 pt-2">
                      Excluded
                      <ul className="px-3 text-xs">
                        <li>Worker's comp paperwork</li>
                        <li>Controlled substance prescription</li>
                        <li>Immunization(s)</li>
                        <li>Laboratory tests</li>
                        <li>Diagnostic tests</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className=" cursor-pointer p-3"
                    onClick={handleServicesClick}
                  >
                    <div className="flex h-10 w-full flex-row items-center justify-between p-5">
                      <div className="w-10/12 font-bold"> SERVICE DETAILS</div>
                      <div className="w-2/12 text-2xl">
                        {" "}
                        {showServices ? "-" : "+"}
                      </div>
                    </div>
                  </div>
                  {showServices && (
                    <div className="p-3">
                      <h1 className="text-green-900">
                        {" "}
                        {doctor.services.map((service) => (
                          <p key={service.id}>{service.name}</p>
                        ))}
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-20 w-full">
                <h1 className="text-center font-bold text-blue-900">
                  Availabilities are
                </h1>
              </div>
            )}
          </div>

          <div className="flex w-full justify-start px-5 font-bold">
            About the provider
          </div>
          <div className="px-5">
            Hi, my name is {doctor.user.firstName} {doctor.user.lastName} , and
            I am a Board Certified Nurse Practitioner from the {doctor.address},
            with over {doctor.experience} years of experience in health care. I
            have established experience at a multi-specialty medical center with
            urgent care and primary care services in{" "}
            {doctor.services.map((service) => (
              <p key={service.id}>{service.name}</p>
            ))}
            .
          </div>

          <div className="border-2">
            <div className="flex flex-row justify-center">
              <h1 className=" text-bold text-center text-2xl">10</h1>
              <h1 className="text-semibold mx-2 mt-2 text-center text-sm">
                Positive Patients Reviews{" "}
              </h1>
            </div>
            <div className="item-center flex w-full flex-row justify-center">
              <h1 className="mx-8 mt-5 border-y-2 text-sm font-semibold">
                Experience:
                <h1 className="text-center font-normal">
                  {doctor.experience} Years{" "}
                </h1>
              </h1>

              <h1 className="mx-8 mt-5 border-y-2 text-sm font-semibold">
                Satisfaction:
                <h1 className="text-center font-normal">
                  {doctor.experience} %{" "}
                </h1>
              </h1>

              <h1 className="mx-8 mt-5 border-y-2 text-sm font-semibold">
                Wait-Time:
                <h1 className="text-center font-normal">
                  {doctor.experience} minutes{" "}
                </h1>
              </h1>
            </div>
          </div>

          <div className="flex w-full flex-row justify-center space-x-5 p-10 ">
            <button className="w-52 rounded-lg bg-blue-500 px-4 py-2 text-white transition-all ease-in-out hover:bg-blue-600">
              Book Appointment
            </button>
            <button className="w-52 rounded-lg bg-rose-500 px-4 py-2 text-white transition-all ease-in-out hover:bg-rose-600">
              Video Consulting
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

DoctorDetail.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default DoctorDetail;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const doctorId = parseInt(id as string, 10);

  const doctor = await prisma.doctor.findUnique({
    where: { userId: doctorId } as Prisma.DoctorWhereUniqueInput,
    select: {
      title: true,
      licenseNumber: true,
      experience: true,
      isVerified: true,
      allowBooking: true,
      specialties: true,
      services: true,
      address: true,
      fees: true,
      discount: true,
      userId: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
          gender: true,
          email: true,
        },
      },
    },
  });

  return {
    props: {
      doctor,
    },
  };
};
