import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { Collapse } from "react-collapse";
import React from "react";

export const CollapseItem: React.FC = ({ open, toggle, title, desc }: any) => {
  return (
    <>
      <div className=" border-base-300 border-b-2 p-4">
        <section className=" hover:bg-gray-200">
          <div
            className="flex cursor-pointer items-center justify-between bg-white hover:bg-gray-200"
            onClick={toggle}
          >
            <h1 className="collapse-title text-xl font-bold text-black">
              {title}
            </h1>
            <div className="mr-3 text-lg font-semibold  text-black ">
              {open ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
            </div>
          </div>
          <Collapse isOpened={open}>
            <div className="bg-white p-5 text-justify text-base text-black">
              {desc}
            </div>
          </Collapse>
        </section>
      </div>
    </>
  );
};

export default CollapseItem;
