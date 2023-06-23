import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
export const CarasoulItem: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mx-0 md:mx-0 lg:mx-28">
      <Carousel responsive={responsive}>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              Telehealth
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              In Person Visit
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              Find A Doctor
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              UTI Consultant
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              ED Consultant
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              Mental Health
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
        <Link href="/services/doctor" className="shadow-xl">
          <div className="mx-2 bg-slate-200 p-5 hover:bg-pink-100 ">
            <VscDeviceCameraVideo className="text-4xl text-black" />
            <h1 className="font-lyft text-2xl font-bold text-black">
              Urgent Care
            </h1>
            <p className="text-black">
              Get all type of telehealth healthcare more accessible and
              affordable
            </p>
            <BsArrowRight className="text-3xl font-semibold text-blue-700" />
          </div>
        </Link>
      </Carousel>
    </div>
  );
};
