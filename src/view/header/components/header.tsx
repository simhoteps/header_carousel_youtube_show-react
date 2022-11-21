import {
  IconClose,
  IconHamburgerMenu,
  IconIonChevronForwardSharp,
} from "core/components/icons/icons";
import React, { Component } from "react";
import "../styles/header_styles.scss";

function Header() {
  const [state, setState] = React.useState<boolean>(true);
  function handleMenuToggle() {
    const navContainer = document.getElementById("nav-container");
    navContainer?.classList.toggle("show-nav");
    setState(!state);
  }
  const headerArr = [
    "SHOW ALL TYRES",
    "FIND A DEALER",
    "GUIDES & VIDEOS",
    "GO WITH",
    "SERVICE & HELP",
  ];
  return (
    <nav className="header">
      <img className="logo" src="./logo.png" alt="" />
      <input
        id="check"
        type="checkbox"
        onClick={() => {
          handleMenuToggle();
        }}
      />
      <label htmlFor="check" className="checkbtn">
        {state ? <IconHamburgerMenu /> : <IconClose />}
      </label>
      <ul id="nav-container">
        {headerArr.map((name) => {
          return (
            <li>
              <a href="#">
                <span>{name}</span>
                <i className="iconIonChevron">
                  {" "}
                  <IconIonChevronForwardSharp />
                </i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Header;
