import React from "react";
import goodDoc from "../assets/img/good-doc.png";
import MainButton from "./repeatable/mainButton";

export default function HomeFirst() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 mx-auto mt-12 md:flex-row lg:max-w-screen-xl md:justify-between sm:px-16">
        <div className="w-full md:w-1/2">
          <div>
            <p className="text-lg font-fair text-main2-color font-bold sm:text-xl lg:text-2xl">
              WELCOME TO DECARE
            </p>
            <h1 className="text-main-color font-bold font-fair text-2xl my-4 sm:text-5xl lg:text-6xl xl:text-7xl">
              We Are Best Dental Service
            </h1>
            <p className="text-sm text-gray-500 font-lato sm:font-bold">
              Donec vitae libero non enim placerat eleifend aliquam erat
              volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
              tristique, commodo gravida lectus non.
            </p>
          </div>

          <div className="mt-16 flex flex-col p-4 shadow-xl sm:flex-row sm:space-x-2">
            <input
              className="px-2 max-md:py-5 bg-slate-100 max-sm:w-full sm:w-2/3 rounded-md"
              type="email"
              placeholder="Your Email Address..."
            />

            <MainButton
              buttonText="GET CALL BACK"
              buttonStyle="mt-3 py-5 max-sm:w-full sm:w-2/6 sm:mt-0"
            />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end md:w-1/2">
          <div className="w-[80%]">
            <img className="" src={goodDoc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
