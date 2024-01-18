import React from "react";
import Title from "./repeatable/title";
import Services from "./services";

export default function HomeServices() {
  return (
    <>
      <Title
        title="OUR SERVICES"
        bigTitle="What We Provide"
        titleStyle="mt-20"
      />
      <Services />
    </>
  );
}
