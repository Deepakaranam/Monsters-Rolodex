import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        This is CUstom Compnonent!!! {props.name} and i am of {props.age}"
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
