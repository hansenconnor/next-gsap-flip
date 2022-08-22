import React, { useState } from "react";
import "../styles/globals.scss";
import { FlipContext, FlipProvider } from "../context/flip-context";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";

function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(Flip);

  const [lastState, setLastState] = useState(null);

  const dispatchFlipStateEvent = (payload) => {
    console.log(payload);
    setLastState(payload);
  };

  return (
    <FlipContext.Provider value={{ lastState, dispatchFlipStateEvent }}>
      <Component {...pageProps} />
    </FlipContext.Provider>
  );
}

export default MyApp;
