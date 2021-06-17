import React from "react";
import KeyPad from "./KeyPad";

const KeyPads = () => {
  return (
    <div className="keypads">
      <div className="upper-keys">
        <KeyPad keyPadValue="7" />
        <KeyPad keyPadValue="8" />
        <KeyPad keyPadValue="9" />
        <KeyPad keyPadValue="DEL" options={"delete"} />
        <KeyPad keyPadValue="4" />
        <KeyPad keyPadValue="5" />
        <KeyPad keyPadValue="6" />
        <KeyPad keyPadValue="+" />
        <KeyPad keyPadValue="1" />
        <KeyPad keyPadValue="2" />
        <KeyPad keyPadValue="3" />
        <KeyPad keyPadValue="-" />
        <KeyPad keyPadValue="." />
        <KeyPad keyPadValue="0" />
        <KeyPad keyPadValue="/" />
        <KeyPad keyPadValue="x" />
      </div>
      <div className="lower-keys">
        <KeyPad keyPadValue="RESET" options={"reset"} />
        <KeyPad keyPadValue="=" options={"equals"} />
      </div>
    </div>
  );
};

export default KeyPads;
