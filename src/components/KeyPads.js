import React from "react";
import KeyPad from "./KeyPad";

const KeyPads = ({ getKeypadValue }) => {
  return (
    <div className="keypads">
      <div className="upper-keys">
        <KeyPad keyPadValue="7" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="8" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="9" getKeypadValue={getKeypadValue} />
        <KeyPad
          keyPadValue="DEL"
          options={"delete"}
          getKeypadValue={getKeypadValue}
        />
        <KeyPad keyPadValue="4" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="5" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="6" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="+" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="1" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="2" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="3" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="-" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="." getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="0" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="/" getKeypadValue={getKeypadValue} />
        <KeyPad keyPadValue="*" getKeypadValue={getKeypadValue} />
      </div>
      <div className="lower-keys">
        <KeyPad
          keyPadValue="RESET"
          options={"reset"}
          getKeypadValue={getKeypadValue}
        />
        <KeyPad
          keyPadValue="="
          options={"equals"}
          getKeypadValue={getKeypadValue}
        />
      </div>
    </div>
  );
};

export default KeyPads;
