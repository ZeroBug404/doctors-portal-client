import React from "react";
import chair from '../../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className="w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: "url('https://i.ibb.co/ZGnbGLD/bg.png')"}}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div className="px-10">
            <h1 class="text-6xl font-bold ">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
