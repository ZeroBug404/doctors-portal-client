import React from "react";

const Infocard = ({img, bgColor}) => {
  return (
    <div class={`card card-side ${bgColor} shadow-xl px-5`}>
      <figure>
        <img
          src={img}
          alt="Movie"
        />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default Infocard;
