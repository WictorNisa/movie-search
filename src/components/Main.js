import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Hero";
import Header from "./Header";
import FormSearch from "./FormSearch";
import styles from "../styles/Main.module.css";
import MovieGallery from "./MovieGallery";

function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [post, setPost] = useState("");
  const MOVIE_API_KEY = "853fa60e";

  useEffect(() => {
    if (!searchQuery) return; // Avoid fetching if searchQuery is empty

    async function fetchMovie(params) {
      try {
        const asyncResponse = await axios(
          `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${searchQuery}`
        );

        const data = asyncResponse.data;

        setPost(data.Search);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, [searchQuery]);

  const handleSubmit = (data) => {
    setSearchQuery(data);
    console.log("Child component was submitted, success");
  };

  console.log(post);

  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <FormSearch handleSubmit={handleSubmit} />
      <MovieGallery movies={post}/>
    </main>
  );
}

export default Main;
