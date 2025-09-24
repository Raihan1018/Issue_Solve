import React, { useState } from "react";

const TogglesBtn = ({ toggleStatus, setToggleStatus }) => {
  return (
    <div className="space-x-5 my-4 flex justify-end">
      <button
        onClick={() => setToggleStatus("All")}
        className={`btn btn-primary ${
          toggleStatus === "All" && "bg-secondary"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setToggleStatus("Pending")}
        className={`btn btn-primary ${
          toggleStatus === "Pending" && "bg-secondary"
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => setToggleStatus("Submitted")}
        className={`btn btn-primary ${
          toggleStatus === "Submitted" && "bg-secondary"
        }`}
      >
        Submitted
      </button>
      <button
        onClick={() => setToggleStatus("Reviewed")}
        className={`btn btn-primary ${
          toggleStatus === "Reviewed" && "bg-secondary"
        }`}
      >
        Reviewed
      </button>
    </div>
  );
};

export default TogglesBtn;
