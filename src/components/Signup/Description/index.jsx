import "./style.css";
import React from "react";

class Description extends React.Component {
  render() {
    return (
      <div className="logo">
        <img className="dot" src="/assets/“.png" alt="sxas" />
        <p>
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <h4>Hideo Kojima</h4>
        <img className="control" src="/assets/control.png" alt="sxas" />
      </div>
    );
  }
}

export default Description;
