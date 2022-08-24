import { Flip } from "gsap/dist/Flip";
import { FlipContext } from "../context/flip-context";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useContext, useEffect, useRef } from "react";

function Potions() {
  gsap.registerPlugin(Flip);
  const { lastState } = useContext(FlipContext);
  const { dispatchFlipStateEvent } = useContext(FlipContext);
  const iconRef = useRef();

  useEffect(() => {
    let q = gsap.utils.selector(iconRef);
    let flipEls = q(".flipMe");

    if (flipEls && lastState) {
      console.log("lastState", lastState);
      Flip.from(lastState, {
        targets: flipEls,
        absolute: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      dispatchFlipStateEvent(Flip.getState(flipEls));
    };
  }, []);

  return (
    <div className="potions">
      <main className={styles.main}>
        <h1 className={styles.title}>Potions</h1>

        {/* <p className="flip" ref={flipRef}>
          This is the flip content
        </p> */}

        {/* <button onClick={setFlipState}>Set flip state</button> */}

        <Link href="/">Home</Link>
        <Link href="/potions">Potions</Link>
        <Link href="/spells">Spells</Link>
      </main>
      <footer className="contain">
        <div className="icons" ref={iconRef}>
          <div className="avatar flipMe">
            <Image alt="asdf" layout="fill" src="/person.svg" />
          </div>
          <div className="potion flipMe">
            <Image alt="asdf" layout="fill" src="/potions.svg" />
          </div>
          <div className="spell flipMe">
            <Image alt="asdf" layout="fill" src="/spell.svg" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Potions;
