"use client";
import React, { useState } from "react";

function State() {
  let [count, SetCount] = useState(0);
  return (
    <div className="  flex items-center h-screen w-full justify-center ">
      <div className=" border-2 border-red-600 flex flex-col p-20 gap-3 bg-slate-300">
        <h1 className="border-2 border-blue-600 p-3 px-6"> My Count = {count} </h1>
        <button onClick={() => SetCount(count + 1)}> Add </button>
        <button onClick={() => SetCount(count-1)}>Subract</button>
        <button onClick={() => SetCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default State;
