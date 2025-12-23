import React from "react";
import ClassComp from "./ClassComp";

const CollegeComp = React.memo(() => {
  console.log("College Component render");

  return (
    <>
      <div className="bg-orange-300 p-10 text-center font-bold text-2xl">
        <div>College Component</div>
        <ClassComp />
      </div>
    </>
  );
});

export default CollegeComp;
