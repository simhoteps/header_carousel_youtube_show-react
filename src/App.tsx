import React from "react";
import "./App.css";
import Header from "view/header/components/header";
import HomePage from "view/home-page/components/home_page";

function App() {
  return (
    <div style={{ height: window.innerHeight }}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
