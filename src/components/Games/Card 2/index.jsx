import React from "react";
import "./style.css";
const Card2 = (props) => {
  return (
    <div className="pagecontne">
      <div className="card2">
        {props.details.map((value, index) => (
          <div key={index} className={`card2 ${value.className}`}>
            <div className="imagediv">
              <div className="imgcard2">
                <img src={value.img} alt="rgt" className="p1" />
              </div>
              <p className="card2-description">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
