import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  useEffect(() => {
    const liEl = document.querySelector(".nav-items");
    if (show) {
      liEl.classList.add("show-list");
    }
    return () => {
      liEl.classList.remove("show-list");
    };
  }, [show]);
  return (
    <nav>
      <div className="logo-container">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.tC10_Fzb-ZeOTlV8ATopGgHaHa&pid=Api&P=0"
          alt="logo"
        />
      </div>
      <div className="hamburger" onClick={handleClick}>
        {show ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>Features</li>
        <li>Video</li>
        <li>Pricing</li>
        <li>Screen</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
