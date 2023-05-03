import { type FC } from "react";
import { AiFillStar } from "react-icons/ai";

export const AvailableTodayTag: FC = () => (
  <span className="bg-green-300 p-1 text-[0.60rem] font-semibold text-green-800">
    AVAILABLE TODAY
  </span>
);

export const HighlyRatedTag: FC = () => (
  <span className="flex items-center gap-0.5 bg-orange-300 p-1 text-[0.60rem] font-semibold text-orange-800">
    <span>
      <AiFillStar className="h-auto w-3" />
    </span>
    <span>HIGHLY RATED</span>
  </span>
);
