// import { Component } from "react";
import "./search-input.styles.css";

const SearchInput = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchInput;
