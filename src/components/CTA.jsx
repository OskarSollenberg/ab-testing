import React from "react";

function CTA({ variant }) {
  const handleClick = () => {
    const trackingData = {
      eventType: "signUpClicked",
      ctaButton: "signUp",
      variantType: variant === "control" ? "control" : "variantB",
    };
    // window.location.pathname = `?variant=variantB`;
    console.log("Sending tracking data:", trackingData);
  };
  return (
    <section className="flex pt-10 justify-center">
      <button
        onClick={handleClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign up
      </button>
    </section>
  );
}

export default CTA;
