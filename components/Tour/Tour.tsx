import React from "react";
import JoyRide from "react-joyride";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".tour-login",
    content: "Connect to wallet",
  },
  {
    target: ".tour-post",
    content: "deposit asset",
  },
  {
    target: ".tour-contact",
    content: "confirm deposit",
  },
];

// Tour component
const Tour = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS} 
        continuous={true} 
        showSkipButton={true}
      />
    </>
  );
};
export default Tour;