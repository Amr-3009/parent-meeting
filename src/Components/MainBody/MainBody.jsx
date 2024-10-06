import React, { useEffect, useRef, useState } from "react";
import "./MainBody.css";
import Image1 from "../../assets/images/51.png";
import Image2 from "../../assets/images/61.png";
import Image3 from "../../assets/images/101.png";
import Image4 from "../../assets/images/111.png";
import Image5 from "../../assets/images/131.png";
import Image6 from "../../assets/images/141.png";
import Image7 from "../../assets/images/171.png";
import Image8 from "../../assets/images/221.png";
import Image9 from "../../assets/images/271.png";
import Image10 from "../../assets/images/281.png";
import Image11 from "../../assets/images/41.png";

const MainBody = () => {
  return (
    <div className="main-body">
      <div className="container-1">
        <div className="subcon-1">
          <img src={Image1} alt="teacher" />
          <img src={Image6} alt="teacher" />
        </div>
        <img src={Image10} alt="teacher" className="adjust-height" />
      </div>
      <div className="container-2">
        <div className="subcon-2">
          <img src={Image3} alt="teacher" />
          <img src={Image4} alt="teacher" />
        </div>
        <div className="subcon-3">
          <img src={Image2} alt="teacher" />
          <img src={Image11} alt="teacher" />
        </div>
      </div>
      <div className="container-3">
        <img src={Image7} alt="teacher" className="adjust"/>
        <div className="subcon-4">
          <img src={Image5} alt="teacher" />
          <img src={Image8} alt="teacher" />
        </div>
      </div>
      <div className="container-4">
        <img src={Image9} alt="teacher" />
      </div>
    </div>
  );
};

export default MainBody;
