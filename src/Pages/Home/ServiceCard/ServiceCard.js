import React from "react";

const ServiceCard = ({ fluorideImg, title }) => {
  return (
    <div className="card w-100 bg-base-100 drop-shadow-md mb-10">
      <figure>
        <img src={fluorideImg} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-xl">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServiceCard;
