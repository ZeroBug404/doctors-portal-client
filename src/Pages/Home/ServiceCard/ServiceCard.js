import React from "react";

const ServiceCard = ({fluorideImg, title}) => {
  return (
    <div class="card w-100 bg-base-100 drop-shadow-md mb-10">
      <figure>
        <img
          src={fluorideImg}
          alt="Shoes"
        />
      </figure>
      <div class="card-body text-center">
        <h2 class="text-center font-bold text-xl">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServiceCard;
