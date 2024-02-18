import React from "react";

export default function CTA() {
  return (
    <div className="flex pt-10 justify-center">
      <button
        onClick={() => console.log("Hello world")}
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Start Test
      </button>
    </div>
  );
}
