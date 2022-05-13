import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div class="card bg-base-100 shadow-xl my-20">
      <div class="card-body">
        <p>{testimonial.description}</p>

        <div class="flex justify-start items-center my-5">
          <div class="avatar mr-4">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={testimonial.img} alt=""/>
            </div>
          </div>
          <div>
            <h2 class="card-title">{testimonial.name}</h2>
            <p>{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
