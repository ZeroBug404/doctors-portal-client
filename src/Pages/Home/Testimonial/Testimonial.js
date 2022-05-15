import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="card bg-base-100 shadow-xl my-20">
      <div className="card-body">
        <p>{testimonial.description}</p>

        <div className="flex justify-start items-center my-5">
          <div className="avatar mr-4">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={testimonial.img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{testimonial.name}</h2>
            <p>{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
