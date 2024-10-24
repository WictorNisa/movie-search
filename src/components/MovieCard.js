import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../styles/MovieCard.module.css";

function MovieCard({ title, poster, handleClick, index }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: index * 0.8, // Delay based on the card index (stagger effect)
     
    });

    tl.fromTo(
      cardRef.current,
      {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.inOut",
      }
    );
  });
  console.log(poster);
  return (
    <div
      onClick={() => handleClick({ title })}
      className={styles.cardWrapper}
      ref={cardRef}
    >
      <div
        className={styles.cardInner}
        style={{ backgroundImage: `url('${poster}')` }}
      >
        <h1>{title}</h1>
        {/* <img src={poster} alt="" className={styles.moviePoster} /> */}
      </div>
    </div>
  );
}

export default MovieCard;
