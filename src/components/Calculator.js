import { useState } from "react";
import Display from "./Display";
import KeyPads from "./KeyPads";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [temp, setTemp] = useState([]);

  const displayReset = () => {
    setVal1();
    setVal2();
    setTemp([]);
    setOperation("");
  };

  const getAnswer = (val1, val2, operation) => {
    if (operation === "+") {
      return val1 + val2;
    } else if (operation === "-") {
      return val1 - val2;
    } else if (operation === "*") {
      return val1 * val2;
    } else if (operation === "/") {
      return val1 / val2;
    }
  };

  const getKeypadValue = (val) => {
    if (val === "+" || val === "-" || val === "*" || val === "/") {
      // Check if there was a prevoius pending operation
      if (operation) {
        // Do the operation and append the answer to the current operation
        const answer = getAnswer(val1, val2, operation);
        // Set the current operation
        setOperation(val);
        // set val1 with the answer for the next operation
        setVal1(answer);
        // set the display value with the operation and answer
        setDisplayValue(`${answer} ${val}`);
        // remove the temp value
        setTemp([]);
      } else {
        // transfer temp to val1 if temp is not empty
        val1 ? setVal1(val1) : setVal1(parseFloat(temp.join("")));
        // set the operation
        setOperation(val);
        // set the display to say 5 +
        setDisplayValue(`${temp.join("")} ${val}`);
        // remove the temp value
        setTemp([""]);
      }
    } else if (val === "DEL") {
      // delete the last entry
      temp && temp.pop();
      operation
        ? setDisplayValue(`${val1} ${operation} ${temp.join("")}`)
        : setDisplayValue(`${temp.join("") === "" ? 0 : temp.join("")}`);
      setVal2(temp.join(""));
    } else if (val === "RESET") {
      // reset the display and the whole operation
      displayReset();
      setDisplayValue("0");
    } else if (val === "=") {
      // complete the operation
      const answer = getAnswer(val1, val2, operation);
      setDisplayValue(`${answer}`);
      displayReset();
    } else {
      // Do the necessary
      if (temp.length === 0) {
        setTemp([val]);
        setVal2(parseFloat(val));
        operation
          ? setDisplayValue(`${val1} ${operation} ${val}`)
          : setDisplayValue(`${val}`);
      } else {
        temp.push(val);
        setTemp(temp);
        setVal2(parseFloat(temp.join("")));
        operation
          ? setDisplayValue(`${val1} ${operation} ${temp.join("")}`)
          : setDisplayValue(`${temp.join("")}`);
      }
    }
  };
  return (
    <div className="calculator">
      <Display display={displayValue} />
      <KeyPads getKeypadValue={getKeypadValue} />
    </div>
  );
};

export default Calculator;
