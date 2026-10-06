import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest", loggedIn: false });

  const login = (name) => setUser({ name, loggedIn: true });
  const logout = () => setUser({ name: "Guest", loggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook so components don't need to import useContext + UserContext
export const useUser = () => useContext(UserContext);