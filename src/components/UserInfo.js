import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const UserInfo = () => {
  const { user, login, logout } = useUser();
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h2>User (Context API)</h2>
      <p>Welcome, <strong>{user.name}</strong></p>
      {user.loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name || "Usman")}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserInfo;