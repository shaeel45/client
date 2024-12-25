import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center fixed top-0 h-screen w-screen left-0 z-[1000000] bg-white">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
