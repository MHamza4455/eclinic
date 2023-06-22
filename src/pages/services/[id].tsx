import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { prisma } from "lib/prisma";
import { NextPageWithLayout } from "../_app";
import { UserLayout } from "~/layouts/UserLayout";
import React from "react";
import { Specialty, Service } from "@prisma/client";
import { Prisma, PrismaClient } from "@prisma/client";

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

  return (
    <div className="mt-24">
      <h1>Doctor Detail Page</h1>
      <p>ID: {id}</p>
      <p>
        Name: {doctor.user.firstName} {doctor.user.lastName}
      </p>
      {/* Display other doctor details */}
    </div>
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
