import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css";

import { useNavigate } from "react-router-dom";

import { FormEvent, useState } from "react";

export const Search = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (valueInput.length > 3) {
      navigate(`/busca/${valueInput}`);
    }
  };

  return (
    <div className={styles.containerSearch}>
      <form
        method="get"
        onSubmit={(e) => handleSearch(e)}
        className={styles.joinSearch}
      >
        <input
          onChange={(e) => setValueInput(e.target.value)}
          id="Search"
          className={`${styles.inputSearch}`}
          type="search"
          placeholder="Pesquisar"
        />
        <button type="submit" className={styles.buttonSearch}>
          <CiSearch className="label-search-icon" />
        </button>
      </form>
    </div>
  );
};
