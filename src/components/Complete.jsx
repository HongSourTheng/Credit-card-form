import React from "react";

const Complete = () => {
  return (
    <div className="container-box">
      <div className="complete-box">
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>
          </li>
        </ul>
        <div className="text-box">
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
        </div>
        <button className="btn-continue">
          <a href="">Continue</a>
        </button>
      </div>
    </div>
  );
};

export default Complete;
