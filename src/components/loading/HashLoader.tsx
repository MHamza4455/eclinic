import Loader from "react-spinners/HashLoader";
import { type FC } from "react";

export const HashLoader: FC = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur-sm">
      <Loader color="#8236d6" />
    </div>
  );
};
