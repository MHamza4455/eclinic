import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { UserLayout } from "~/layouts/UserLayout";
import Image from "next/image";
import { ServiceCards } from "~/components/ServiceCards";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Footer from "~/components/footer";
const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="mt-20 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="lg:flex lg:justify-center ">
          <div className="p-10 lg:w-[450px]">
            <h1 className="font-lyft mt-1 text-4xl font-bold ">
              Get the <span className="text-blue-700">best price </span> with
              <span className="text-blue-700"> great doctors </span>and
              <span className="text-blue-700"> specialists </span>
              <span className="text-blue-700"> near </span> you.
            </h1>
            <p className="mt-5 text-base ">
              Affordable, hassle-free telehealth appointments from quality
              healthcare providers on your schedule.
            </p>
            <button className="my-5 flex w-72 items-center justify-center rounded-none bg-blue-700 p-4 font-semibold text-white hover:bg-blue-400">
              Get Care
            </button>
          </div>
        </div>
        <div className="flex h-full w-full">
          <Image
            src="/images/backgrounds/about.jpg"
            alt="NewYorkCityTaxis-Curb"
            width="1000"
            height="1000"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-72 items-center justify-center bg-slate-100">
        <div className="w-4/5">
          <h1 className="text-center text-3xl font-bold text-black">
            Welcome to the most professional only superstore for great doctors
            and specialists.
          </h1>
          <h2 className="mt-5 text-center">
            Access convenient, high-quality, full-scope medical care at
            affordable self-pay prices - without insurance.
          </h2>
        </div>
      </div>
      <div className="mx-5 my-10 flex flex-col md:flex-row lg:mx-28">
        <div className="flex-1  md:w-1/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <h2>MISSION STATEMENT</h2>
              <h1 className="font-lyft text-2xl font-bold text-black">
                Aapki Sehat, Hamari Tarjeeh
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-3/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <p>
                Eclinic is on a mission to make quality healthcare more
                accessible and affordable for 220 Million+ Pakistanis. We
                believe in empowering our users with the most accurate,
                comprehensive, curated information, care and enabling them to
                make better healthcare decisions.
              </p>
              <button className="... mt-5 rounded-none border border-b-2 border-transparent border-b-blue-700 ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <h1 className="font-lyft mx-5 pt-10 text-4xl font-bold text-black lg:mx-28">
          Top Searched
        </h1>
        <h1 className="font-lyft mx-5 py-2 text-4xl font-bold text-black lg:mx-28">
          Specialties
        </h1>
        <ServiceCards />
        <div className="flex justify-end lg:mx-28">
          <Link href="#" className="flex">
            <h1 className="mb-5 text-lg text-gray-800">See All Specialities</h1>
            <IoIosArrowForward className="mt-1 text-xl text-gray-800"></IoIosArrowForward>
          </Link>
        </div>
      </div>
      <div className="mt-10 grid grid-rows-2 md:mt-32 md:grid-cols-2 md:grid-rows-1">
        <div className="-z-30 flex items-center justify-center max-md:row-start-2">
          <div className="relative -z-20 ml-8 h-96 w-5/6 bg-blue-800">
            <div className="absolute right-8 top-8 -z-10 h-full w-full overflow-hidden  bg-black">
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
        <div className="-z-20 flex justify-center max-md:row-start-1">
          <div className="relative -z-10 h-full w-5/6 md:h-3/4">
            <h1 className="mt-16 text-justify text-5xl font-semibold">
              About Us
            </h1>
            <p className="mb-10 mt-1 text-justify  text-slate-900  md:mb-0 ">
              Since its inception in 2023, Eclinic believes that digital
              healthcare is the fastest, efficient and safest way to provide
              healthcare services. With an aim to provide a seamless ecosystem
              of healthcare, Eclinic is pacing forward and stepping up the game
              of digital healthcare in Pakistan because we believe “Apki Sehat,
              Hamari Tarjeeh.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex w-full py-4">
          <div className="grid h-20 flex-grow place-items-center"></div>
          <div className="divider divider-horizontal text-rose-500"></div>
          <div className="grid h-20 flex-grow place-items-center"></div>
        </div>
        <div>
          <h4 className="text-center text-3xl text-black">
            Experience Luxury Health Around the World
          </h4>
          <p className="mt-5 text-center text-base text-black md:mx-32">
            Enhance Your Healthcare Experience with Our Premium Services and
            Top-of-the-Line doctors, Providing Unmatched Quality for Your
            Journeys. Our Commitment to Excellence is not just for You, but for
            the Benefit of Others as well. Choose from Our Wide Range of
            Services and Revel in a Truly First-Class Healthcare Experience.
          </p>
        </div>
        <div className="md:mx-24">
          <div className="grid-row-3 md:grid-row-1 grid md:grid-cols-3 ">
            <div className=" flex items-center justify-center md:h-80 ">
              <div className="relative mb-5 mt-5 w-72 md:w-96">
                <section className=" flex justify-center pb-5">
                  <Image
                    src="/images/icons/quality-assurance.png"
                    alt="award-winnig"
                    width="1000"
                    height="1000"
                    className="h-24 w-28"
                  />
                </section>
                <h1 className="mt-1 text-center text-xl text-black">
                  QUALITY ASSURED
                </h1>
                <p className="text-center text-base text-black md:mx-5">
                  Worlds's largest executive fleet of Luxury Heathcare services.
                  With thousands of professonals.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:h-80">
              <div className="relative  mb-5 mt-5 w-72 md:w-96">
                <section className=" flex justify-center pb-5">
                  <Image
                    src="/images/icons/heritage.png"
                    alt="heritage"
                    width="1000"
                    height="1000"
                    className="h-20 w-36"
                  />
                </section>
                <h1 className="mt-3 text-center text-xl text-black">
                  HERITAGE AND HISTORY
                </h1>
                <p className="text-center text-sm text-black md:mx-5 md:text-base">
                  Worlds's largest executive fleet of Luxury Heathcare services.
                  With highly expert and trained professonals.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:h-80 ">
              <div className="relative mb-5 mt-5 w-72 md:w-96">
                <section className=" flex justify-center pb-5">
                  <Image
                    src="/images/icons/award-wining.png"
                    alt="quality-assurance"
                    width="1000"
                    height="1000"
                    className="h-28 w-28"
                  />
                </section>
                <h1 className="text-center text-xl text-black">
                  AWARD WINNING
                </h1>
                <p className="text-center text-base text-black md:mx-5">
                  We care about our carbon footprint as much as our customer
                  service – just look at these lovely awards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
export default AboutPage;
