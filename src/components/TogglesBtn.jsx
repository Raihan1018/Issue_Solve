import React, { useState } from "react";

const TogglesBtn = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <div className="space-x-5 my-4 flex justify-end">
      {btns.map((btn, index) => {
        return (
          <button
            className={`btn btn-secondary ${
              toggleStatus === btn && "bg-primary"
            }`}
            onClick={() => setToggleStatus(btn)}
            key={index}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

//  <button
//             key={idx}
//             onClick={() => setToggleStatus(btn)}
//             className={`btn btn-primary ${
//               toggleStatus == btn && "bg-secondary"
//             }`}
//           >
//             {btn}
//           </button>
export default TogglesBtn;
