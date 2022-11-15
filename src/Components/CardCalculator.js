import React, { useState } from "react";
import cardCalculator from "../assets/cardCalculator.css";

const CardCalculator = () => {
  const initaleBtn = [
    ["%", "CE", "AC", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    [" ", "0", ".", "="],
  ];

  const [valueOparator, setValueOparator] = useState("");
  const [totalOp, setTotalOp] = useState("");

  const handleChange = e => {
    if (e.target.value !== "=") {
      if (e.target.value == "AC") {
        setTotalOp("");
        setValueOparator("");
      } else if (e.target.value == "CE") {
        setValueOparator(valueOparator.slice(0, -1));
      } else {
        setValueOparator(valueOparator + e.target.value);
      }
    } else {
      setValueOparator("");
      setTotalOp(valueOparator);
      setValueOparator(eval(valueOparator));
    }
  };
  return (
    <div className="card">
      <div className="card_container">
        <div className="card_viewText">
          <h3>Calculator</h3>
          <input className="input-total" type="text" value={totalOp} />
          <input className="input-op" type="text" value={valueOparator} />
        </div>

        <div className="card_viewBtn">
          <div className="card_btn">
            {initaleBtn.map((btn, i) => {
              return (
                <div key={i} className="card_btn_item">
                  {btn.map((val, i) => {
                    return (
                      <button
                        key={i}
                        value={val}
                        onClick={e => handleChange(e)}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCalculator;
