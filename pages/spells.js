import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FlipContext } from "../context/flip-context";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import Link from "next/link";

function Spells() {
  gsap.registerPlugin(Flip);

  const { lastState } = useContext(FlipContext);
  const { dispatchFlipStateEvent } = useContext(FlipContext);
  const flipRef = useRef();

  useEffect(() => {
    console.log("lastState: ");
    console.log(lastState);
    return () => {
      if (flipRef) {
        dispatchFlipStateEvent(Flip.getState(flipRef.current));
      }
    };
  }, []);

  const setFlipState = () => {
    dispatchFlipStateEvent(flipRef);
  };

  return (
    <div className="spells">
      <main className={styles.main}>
        <h1 className={styles.title}>Spells</h1>

        {/* <p className="flip" ref={flipRef}>
          This is the flip content
        </p> */}

        {/* <button onClick={setFlipState}>Set flip state</button> */}

        <Link href="/">Home</Link>
        <Link href="/potions">Potions</Link>
        <Link href="/spells">Spells</Link>
      </main>
      <footer className="contain">
        <div className="icons">
          <img className="avatar flipMe" src="/person.svg" />
          <img className="potion flipMe" src="/potions.svg" />
          <img className="spell flipMe" src="/spell.svg" />
        </div>
      </footer>
    </div>
  );
}

export default Spells;
