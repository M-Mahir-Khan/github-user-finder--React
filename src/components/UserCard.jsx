const UserCard = ({ user }) => {
    return (
      <div className="user-card">
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.name || "Name not available"}</h2>
        <p>@{user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  