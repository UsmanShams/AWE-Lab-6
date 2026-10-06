import React from "react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Combined State Management</h1>
      <ThemeToggle />
      <UserInfo />
      <Counter />
    </div>
  );
}

export default App;