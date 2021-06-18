import React from "react";

const KeyPad = ({ keyPadValue, options, getKeypadValue }) => {
  const specificButtonStyling = {
    delete: {
      backgroundColor: "#0a0a2b",
      color: "white",
    },
    reset: {
      backgroundColor: "#0a0a2b",
      color: "white",
      gridTemplateColums: "2fr",
    },
    equals: {
      backgroundColor: "red",
      color: "white",
    },
  };

  return (
    <div
      className="keypad"
      style={specificButtonStyling[options]}
      onClick={(e) => {
        getKeypadValue(e.target.innerText);
      }}
    >
      {keyPadValue}
    </div>
  );
};

export default KeyPad;
