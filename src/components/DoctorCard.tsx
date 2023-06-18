import Image from "next/image";
import { type FC } from "react";
import clsx from "clsx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { times } from "lodash";
import dayjs from "dayjs";
import { AvailableTodayTag, HighlyRatedTag } from "./tags";

const fullName = "dr. mitchell mandel";
const services = ["coronary angioplasty", "angioplasty"];
const specialties = ["dermatologist", "cardiologist"];
const averageRating = 4.3;
const totalReviews = 100;
const online = true;
const avatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";
const nextAvailableDay = new Date();
const fees = 3000;
const discount: number | undefined = 20;
const timings = ["10:00", "12:00", "13:00", "14:00", "15:00", "19:00", "20:00"];
const address: string | undefined =
  "73-09 Myrtle Ave. Floor 1, Suite 1, Glendale, NY 11385";

export const DoctorCard: FC = () => {
  const fillStars = Math.round(averageRating);
  const outlineStars = 5 - fillStars;

  return (
    <>
      <div className=" flex w-11/12 flex-col justify-between border p-5 drop-shadow-sm lg:w-[46rem] lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-[24rem]">
          <div className="flex flex-col">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold capitalize text-purple-700">
              {fullName}
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold capitalize">
              {specialties.join(", ")}
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-light capitalize">
              {services.join(", ")}
            </span>
          </div>

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
              <span
                className={clsx(
                  "absolute bottom-0 right-0 block h-5 w-5 rounded-full ring-2 ring-white",
                  online ? "animate-pulse bg-green-500" : "bg-red-700"
                )}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              {totalReviews >= 1 && (
                <div className="flex items-center">
                  {times(fillStars, (i) => (
                    <AiFillStar key={i} className="text-lg text-yellow-500" />
                  ))}
                  {times(outlineStars, (i) => (
                    <AiOutlineStar
                      key={i}
                      className="text-lg text-yellow-500"
                    />
                  ))}
                  <span className="ml-1 text-sm font-semibold">
                    {averageRating}
                  </span>
                  <span className="ml-1 text-xs font-light">
                    ({totalReviews})
                  </span>
                </div>
              )}
              <div className="flex flex-wrap gap-1">
                {new Date().toDateString() ===
                  nextAvailableDay.toDateString() && <AvailableTodayTag />}
                {averageRating > 3.9 && totalReviews > 10 ? (
                  <HighlyRatedTag />
                ) : null}
              </div>
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
                  discount
                    ? "text-xs line-through"
                    : "text-lg font-bold text-purple-600"
                )}
              >
                ${fees}
              </span>
              {discount && (
                <>
                  <span className="text-lg font-semibold text-purple-600">
                    ${fees - fees * (discount / 100)}
                  </span>
                  <span className="text-xs">{discount}% Discount</span>
                </>
              )}
            </span>
          </div>
          <div className="text-justify text-xs tracking-tight">{address}</div>
          <div className="grid grid-cols-3 grid-rows-2 gap-1 text-sm lg:grid-cols-2 lg:grid-rows-3">
            {timings.map((timing, i) => {
              if (i >= 5) return null;
              const [hours, minutes] = timing.split(":");
              if (!hours || !minutes) return null;
              const targetTime = new Date();
              targetTime.setUTCHours(+hours, +minutes, 0, 0);
              return (
                <button
                  className="border border-purple-600 bg-purple-600 py-1.5 font-semibold text-yellow-400 transition-all hover:bg-transparent hover:text-purple-600"
                  key={i}
                >
                  {dayjs(targetTime).format("HH:mm")}
                </button>
              );
            })}
            {timings.length > 5 && (
              <button className="bg-slate-100 py-1.5 font-semibold tracking-tighter text-purple-600 transition-all hover:bg-slate-200">
                More times
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
