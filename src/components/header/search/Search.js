import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search_form_container">
        <input
          type="text"
          placeholder="Search"
          className="search_input"
        ></input>
      </div>
      <button className="search_btn">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default Search;
