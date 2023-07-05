import { Prisma, PrismaClient } from "@prisma/client";
import React, { useState } from "react";
import { Service, Specialty } from "@prisma/client";

import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import { UserLayout } from "~/layouts/UserLayout";
import { prisma } from "lib/prisma";
import { useRouter } from "next/router";

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
interface FormData {
  name: string;
  address: string;
  phoneNo: string;
  email: string;
  doctorId: string;
}
const BookAppointment: NextPageWithLayout = ({
  doctor,
}: {
  doctor: DoctorData;
}) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    phoneNo: "",
    email: "",
    doctorId: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const doctorId = id;
  const refreshData = () => {
    router.replace(router.asPath);
  };
  async function create(data: FormData) {
    try {
      await fetch("http://localhost:3000/api/appointment/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() =>
        setForm({ name: "", address: "", phoneNo: "", email: "", doctorId: "" })
      );
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-32">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-3xl font-bold capitalize text-black">
          FILL THE FORM TO CONTINUE.
        </h1>
        <div className="mt-10 flex w-screen items-center justify-center ">
          <div className="">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(form);
              }}
              className="w-full max-w-lg"
            >
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <input
                    className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="doctorId"
                    type="hidden"
                    value={
                      (form.doctorId = Array.isArray(id)
                        ? id[0] ?? ""
                        : id ?? "")
                    }
                    onChange={(e) =>
                      setForm({ ...form, doctorId: e.target.value })
                    }
                  />
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Farrukh Iqbal"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="FarrukhIqbal@gmail.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="phoneNo"
                    type="tel"
                    placeholder="0300-1234567"
                    value={form.phoneNo}
                    onChange={(e) =>
                      setForm({ ...form, phoneNo: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="address"
                    type="text"
                    placeholder="Johar Town Lahore Pakistan"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={async () => {
                  if (
                    window.confirm("Are You Sure You Want To Book Appointment?")
                  ) {
                    alert("Your Appointment Has Been Booked.");
                    router.push("/");
                  }
                }}
                className="rounded bg-blue-500 p-3 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

BookAppointment.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default BookAppointment;
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
