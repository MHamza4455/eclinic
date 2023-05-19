import { type ReactElement } from "react";
import { UserLayout } from "~/layouts/UserLayout";
import { type NextPageWithLayout } from "./_app";
import { CarasoulItem } from "~/components/CarasoulItem";
import { ServiceCards } from "~/components/ServiceCards";
import { api } from "~/utils/api";

import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div className="mt-20"></div>
      <div className="flex h-screen  flex-col justify-center bg-[url('/images/backgrounds/homeBanner.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto my-auto flex w-[338px] items-center justify-center bg-white/80 backdrop-invert backdrop-opacity-10 lg:w-1/2">
          <div className="m-7 w-full">
            <div className="banner-content ">
              <h1 className=" font-lyft text-5xl font-bold text-black">
                Doctor appointments
              </h1>
              <h2 className="mt-7  text-justify text-lg text-black">
                Find the best price for the highest quality physicians.
              </h2>
              <h2 className="mb-2 text-justify text-lg text-black">
                Book an appointment in minutes.
              </h2>
            </div>
            <div className="banner-form">
              <form className="flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            <button className="my-5 flex w-80 items-center justify-center rounded-none bg-blue-700 p-4 font-semibold text-white hover:bg-blue-400">
              I Need To See A Doctor Urgently
            </button>
            <button className="my-5 flex w-80 items-center justify-center rounded-none border  border-blue-700 bg-white p-4 font-semibold text-blue-700 hover:bg-blue-100">
              I Need To See A Doctor Urgently
            </button>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="mx-5 lg:mx-28">
          <div>
            <h1 className="font-lyft mt-10 text-4xl font-bold text-black">
              Top-rated online doctors & specialists available now.
            </h1>
            <h1 className="mt-5 text-justify text-lg text-black">
              Choose from thousands of providers at every day affordable prices.
              Book online today.
            </h1>
          </div>
        </div>
      </div>
      <CarasoulItem />
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
            <h1 className="text-lg text-gray-800">See All Specialalities</h1>
            <IoIosArrowForward className="mt-1 text-xl text-gray-800"></IoIosArrowForward>
          </Link>
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default HomePage;
