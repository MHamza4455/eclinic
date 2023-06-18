import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "lib/prisma";
import { NextPageWithLayout } from "../_app";
import { UserLayout } from "~/layouts/UserLayout";
import React, { ReactElement } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import clsx from "clsx";
import { Service, Specialty } from "@prisma/client";
const nextAvailableDay = new Date();
const avatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

interface Doctors {
  doctors: {
    id: Key | null | undefined;
    user: any;
    title: string;
    licenseNumber: string;
    experience: number;
    fees: number;
    discount: number;
    isVerified: boolean;
    allowBooking: boolean;
    specialties: Specialty[];
    services: Service[];
  }[];
}

interface FormData {
  title: string;
  licenseNumber: string;
  experience: number;
  isVerified: boolean;
  allowBooking: boolean;
}

const Doctor: NextPageWithLayout = ({ doctors }: Doctors) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div className="mt-24 flex justify-center">
      <div>
        <h1 className="mt-4 text-center text-2xl font-bold">Doctors</h1>
        {doctors.map((doctor) => (
          <div className="flex w-11/12 flex-col justify-between border p-5 drop-shadow-sm lg:w-[46rem] lg:flex-row">
            <div className="flex flex-col gap-4 lg:w-[24rem]">
              <div className="flex gap-5">
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
              <div className="flex flex-col">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold capitalize text-purple-700">
                  {doctor.user.firstName} {doctor.user.lastName}
                </span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base capitalize text-purple-900">
                  <h3 className="font-bold">{doctor.title}</h3>
                </span>
              </div>
              <div className="main flex gap-20">
                <div className="first">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap capitalize">
                    <h3 className="font-bold">Specialties:</h3>
                    {doctor.specialties.map((specialty) => (
                      <p key={specialty.id}>{specialty.name}</p>
                    ))}
                  </span>
                </div>
                <div className="second">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light capitalize">
                    <h3 className="font-bold">Services:</h3>
                    {doctor.services.map((service) => (
                      <p key={service.id}>{service.name}</p>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <hr className="my-5 lg:hidden" />

            <div className="flex flex-col gap-3 lg:w-[18rem]">
              <div className="flex items-center justify-between tracking-tight">
                <span className="text-sm tracking-tighter">
                  {dayjs(nextAvailableDay).format("ddd, MMM DD")}
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className={clsx(
                      doctor.discount
                        ? "text-xs line-through"
                        : "text-lg font-bold text-purple-600"
                    )}
                  >
                    Rs{doctor.fees}
                  </span>
                  {doctor.discount && (
                    <>
                      <span className="text-lg font-semibold text-purple-600">
                        Rs{doctor.fees - doctor.fees * (doctor.discount / 100)}
                      </span>
                      <span className="text-xs">
                        {doctor.discount}% Discount
                      </span>
                    </>
                  )}
                </span>
              </div>
              <div className="text-justify text-xs tracking-tight">
                doctor.address
              </div>
              <div className="">
                <button className="w-52 rounded-lg bg-blue-500 px-4 py-2 text-white transition-all ease-in-out hover:bg-blue-600">
                  Book Appointment
                </button>
                <button className="mt-4 w-52 rounded-lg bg-rose-500 px-4 py-2 text-white transition-all ease-in-out hover:bg-rose-600">
                  Video Consulting
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Doctor.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
export default Doctor;

export const getServerSideProps: GetServerSideProps = async () => {
  const doctors = await prisma.doctor.findMany({
    select: {
      title: true,
      licenseNumber: true,
      experience: true,
      isVerified: true,
      allowBooking: true,
      specialties: true,
      services: true,
      fees: true,
      discount: true,
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
      doctors,
    },
  };
};
