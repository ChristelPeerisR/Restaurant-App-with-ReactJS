import React from "react";
import "./Location.css";
import map from "../../assets/map.png";

const Location = () => {
  return (
    <div id="location">
      <h1>LOCATIONS</h1>
      <div class="location">
        <div className="locationleft">
          <img className="location" src={map} alt="" />
        </div>
        <div className="locationright">
          <h4>FIND YOUR SUNSET TACOS</h4>
          <form action="">
            <input type="text" class="locsearch" placeholder="Enter your City and State"/>
            <button type="submit" className='dark-btn'>Search</button>
          </form>
          <p>To find a Senset Tacolicious store,<br/>enter a city or state above.</p>
          <p>------ or ------</p>
          <p><a href="https://www.google.com/maps/@8.5067948,78.102528,15z?entry=ttu">
            use your location</a></p>
        </div>
      </div>
    </div>
  );
};

export default Location;
