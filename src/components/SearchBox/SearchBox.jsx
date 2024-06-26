import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="search">
        Find contact by name:
      </label>
      <input
        id="search"
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
