import { useState } from "react";
import styles from "../styles/FormSearch.module.css";

function FormSearch({ handleSubmit }) {

  const [value, setValue] = useState("");

  const sendValueToMain = (e) => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <div>
      <form action="" className={styles.form} onSubmit={sendValueToMain}>
        <label htmlFor=""></label>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a movie"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormSearch;
