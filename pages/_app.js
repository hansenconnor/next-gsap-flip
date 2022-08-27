import React, { useState } from "react";
import "../styles/globals.scss";
import { FlipContext } from "../context/flip-context";
import { Flip } from "gsap/dist/Flip";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {
  const [lastState, setLastState] = useState(null);

  const dispatchFlipStateEvent = (payload) => {
    console.log("setting last state", payload);
    setLastState(payload);
  };

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <FlipContext.Provider value={{ lastState, dispatchFlipStateEvent }}>
      {getLayout(<Component {...pageProps} />)}
    </FlipContext.Provider>
  );
}

export default MyApp;
