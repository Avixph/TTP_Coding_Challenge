import styled from "styled-components";
import magnify from "../../images/icons+logos/search-icon.svg";

const SearchBar = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 24px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }
  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
    color: #333;
  }
  form > button {
    display: none;
  }
  input:focus {
    outline: none;
  }
  input:active {
    outline: none;
  }
`;

const Search = () => {
  return (
    <SearchBar>
      <form>
        <img src={magnify} alt="" style={{ width: 16, marginLeft: 6 }} />
        <input placeholder="Search" />
      </form>
    </SearchBar>
  );
};

export default Search;
