import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    if (!username) return;

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(""); // Clear any errors
    } catch (err) {
      setUserData(null);
      setError("User not found. Please try another username.");
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Finder</h1>
      <SearchBar username={username} setUsername={setUsername} fetchUserData={fetchUserData} />
      {error && <p className="error">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
