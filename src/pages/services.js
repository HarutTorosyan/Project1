import React from "react";
import Title from "./repeatable/title";
import ServicesProvide from "./components/servicesProvide";
import Canal from "../assets/img/canal.png";
import Alignment from "../assets/img/alignment.png";
import Cosmetic from "../assets/img/cosmetic.png";
import OralHyg from "../assets/img/oralhyg.png";
import Advisory from "../assets/img/advisory.png";
import Cavity from "../assets/img/cavity.png";
import ServiceImg from "../assets/img/services-img.png";

export default function Services() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:items-center md:flex-row mt-16 px-5 md:space-x-3 max-md:space-y-5">
          <div className="flex">
            <ul className="space-y-3 flex flex-col">
              <li>
                <ServicesProvide
                  title="Root Canal"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={Canal}
                />
              </li>
              <li>
                <ServicesProvide
                  title="Alignment Teeth"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={Alignment}
                />
              </li>
              <li>
                <ServicesProvide
                  title="Cosmetic Teeth"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={Cosmetic}
                />
              </li>
            </ul>
          </div>

          <div className="hidden lg:block w-[550px]">
            <img src={ServiceImg} className="" alt="" />
          </div>

          <div className="flex">
            <ul className="flex flex-col space-y-3">
              <li>
                <ServicesProvide
                  left="text-start"
                  reverse="flex-row-reverse"
                  title="Oral Hygiene"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={OralHyg}
                />
              </li>
              <li>
                <ServicesProvide
                  left="text-start"
                  reverse="flex-row-reverse"
                  title="Live Advisory"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={Advisory}
                />
              </li>
              <li>
                <ServicesProvide
                  left="text-start"
                  reverse="flex-row-reverse"
                  title="Cavity Inspection"
                  description="Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
                  img={Cavity}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
