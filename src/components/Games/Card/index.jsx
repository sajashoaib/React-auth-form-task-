import React from 'react';
import './style.css';

const Card = (props) => {
  const { details, reverse } = props;

  return (
    <div className="pagecontne">
      <div className="cards">
        {details.map((value, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${value.backgroundImage})` }}
            className={`card1 ${value.className}`}
          >
            {reverse ? (
              <>
                <div className="imgscard1">
                  <img src={value.logocard} className="man1" />
                  <p className="card-description">{value.description}</p>
                </div>
                <div className="imagee">
                  <img src={value.img} alt="rgt" className="ma1" />
                </div>
              </>
            ) : (
              
              <>
                <div className="imagee">
                  <img src={value.img} alt="rgt" className="ma1" />
                </div>
                <div className="imgscard1">
                  <img src={value.logocard} className="man1" />
                  <p className="card-description">{value.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
