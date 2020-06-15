import React from "react";

const ButtonController = (props) => {
  return (
    <div>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.start}>Start</button>
    </div>
  );
};

export default ButtonController;
