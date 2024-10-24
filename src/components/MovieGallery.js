import styles from "../styles/MovieGallery.module.css";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MovieCard from "./MovieCard";

function MovieGallery({ movies }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4; // Number of cards to display

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      // Move left and wrap around
      return (prevIndex - 1 + movies.length) % movies.length;
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      // Move right and wrap around
      return (prevIndex + 1) % movies.length;
    });
  };

  const handleClick = (movie) => {
    setSelectedCard(movie);
    setExpanded(true);
  };

  const visibleMovies = Array.from({ length: cardsToShow }, (_, index) => {
    const movieIndex = (currentIndex + index) % movies.length; // Wrap around logic
    return movies[movieIndex];
  });

  return (
    <>
      {movies ? (
        <section className={styles.movieSection}>
          <button onClick={handleLeftClick} className={styles.leftButton}>Left</button>
          <div className={styles.cardsContainer}>
            {visibleMovies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.Title}
                poster={movie.Poster}
                handleClick={() => handleClick(movie)}
              />
            ))}
          </div>
          <button onClick={handleRightClick}  className={styles.leftButton}>Right</button>
        </section>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default MovieGallery;
