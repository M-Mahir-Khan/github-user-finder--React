const SearchBar = ({ username, setUsername, fetchUserData }) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserData}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  