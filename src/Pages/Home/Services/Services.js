import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="my-28 text-center">
        <h3 className="text-primary uppercase font-bold">Our services</h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10">
        <ServiceCard
          fluorideImg={fluoride}
          title={"Fluoride Treatment"}
        ></ServiceCard>
        <ServiceCard
          fluorideImg={cavity}
          title={"Cavity Filling"}
        ></ServiceCard>
        <ServiceCard
          fluorideImg={whitening}
          title={"Teeth Whitening"}
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
