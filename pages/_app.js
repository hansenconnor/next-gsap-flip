import React, { useState } from "react";
import "../styles/globals.scss";
import { FlipContext } from "../context/flip-context";

function MyApp({ Component, pageProps }) {
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
