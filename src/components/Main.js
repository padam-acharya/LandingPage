import React from "react";
import "../styles.css";
export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>Bulk App</h1>
          <div className="underline"></div>
          <h3>best app in the universe</h3>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            sit amet luctus venenatis lectus magna fringilla urna. Orci
            phasellus egestas tellus rutrum tellus pellentesque. Commodo viverra
            maecenas accumsan lacus. Enim eu turpis egestas pretium aenean
            pharetra magna ac placerat.
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="img-cont">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-using-mobile-phone-2839467-2371260.png"
            alt="man with a phone"
          />
        </div>
      </div>
    </main>
  );
}
