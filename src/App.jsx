import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import TogglesBtn from "./components/TogglesBtn";

const App = () => {
  const [toggleStatus, setToggleStatus] = useState([]);
  console.log(toggleStatus);

  return (
    <div>
      <NavBar />
      <Container>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-md p-7 text-white bg-gray-600 text-center">
            <h1 className="font-semibold text-xl">Pending</h1>
            <h5>0</h5>
          </div>
          <div className="rounded-md p-7 text-white bg-blue-500 text-center">
            <h1 className="font-semibold text-xl">Submitted</h1>
            <h5>2</h5>
          </div>
          <div className="rounded-md p-7 text-white bg-teal-500 text-center">
            <h1 className="font-semibold text-xl">Review</h1>
            <h5>4</h5>
          </div>
        </div>

        {/* toggle button */}
        <TogglesBtn
          toggleStatus={toggleStatus}
          setToggleStatus={setToggleStatus}
        />
      </Container>
    </div>
  );
};

export default App;
