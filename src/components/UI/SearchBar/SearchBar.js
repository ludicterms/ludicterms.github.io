import "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      placeholder="&#xf002; Search..."
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyUp={props.onChange}
      //searchTerm saves the data from search input on every occurance of change event
      value={props.searchTerm}
      //handleChange takes event object as arg and set current value of form to searchTerm state using setSearchTerm method
      onChange={props.onChange}
    ></input>
  );
};

export default SearchBar;
