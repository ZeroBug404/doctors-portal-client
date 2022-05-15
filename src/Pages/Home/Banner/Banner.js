import React from "react";
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className="w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div className="px-10">
            <h1 className="text-6xl font-bold ">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
