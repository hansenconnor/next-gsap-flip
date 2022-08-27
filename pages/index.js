import { Flip } from "gsap/dist/Flip";
import { FlipContext } from "../context/flip-context";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import Layout from "../components/layout";

function Home({ props }) {
  gsap.registerPlugin(Flip);
  const { lastState, dispatchFlipStateEvent } = useContext(FlipContext);
  const iconRef = useRef();
  let flipEls = null;

  useEffect(() => {
    let q = gsap.utils.selector(iconRef);
    flipEls = q(".flipMe");
    console.log("flip els use effect", Flip.getState(flipEls));

    if (flipEls && lastState) {
      Flip.from(lastState, {
        targets: flipEls,
        ease: "sine.inOut",
        duration: 0.5,
      });
    }

    return () => {
      console.log("flip els use cleanup", Flip.getState(flipEls));
      let leavingState = Flip.getState(flipEls);
      dispatchFlipStateEvent(leavingState);
    };
  }, []);

  return (
    <div className="icons" ref={iconRef}>
      <div className="avatar flipMe" data-flip-id="person">
        <Image alt="asdf" layout="fill" src="/person.svg" />
      </div>
      <div className="potion flipMe" data-flip-id="potion">
        <Image alt="asdf" layout="fill" src="/potions.svg" />
      </div>
      <div className="spell flipMe" data-flip-id="spell">
        <Image alt="asdf" layout="fill" src="/spell.svg" />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout classname="home" pageTitle="home">
      {page}
    </Layout>
  );
};

export default Home;
