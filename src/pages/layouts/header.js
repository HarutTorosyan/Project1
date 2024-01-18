import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/react-1-logo-png-transparent-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full font-mainFont py-6 max-xl:px-6">
        <div className="flex justify-between items-center max-w-screen-sm lg:max-w-screen-xl mx-auto">
          <Link to={""}>
            <img src={Logo} className="w-40" alt="" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex text-sm space-x-2 font-extrabold lg:space-x-6 lg:text-xl lg:font-bold text-main-color">
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={""}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"about"}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"services"}
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"opinion"}
                >
                  OPINION
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"pricing"}
                >
                  PRICING
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"our-team"}
                >
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link
                  className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                  to={"blog"}
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden z-10 text-3xl">
            {open ? (
              <FaTimes
                className="text-slate-950"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <FaBars onClick={() => setOpen(!open)} />
            )}
          </div>
          <ul
            className={
              open
                ? "text-slate-950 font-bold items-center py-12 px-10 flex flex-col space-y-5 absolute w-full bg-sky-300 left-0 top-0 transition-all duration-200 ease-linear overflow-hidden h-full"
                : "text-slate-950 font-bold absolute w-full items-center flex flex-col space-y-5 bg-sky-300 left-0 top-0 transition-all duration-200 ease-linear overflow-hidden h-0"
            }
          >
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={""}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"news"}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"projects"}
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"blog"}
              >
                OPINION
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"contact"}
              >
                PRICING
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"contact"}
              >
                OUR TEAM
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"contact"}
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
