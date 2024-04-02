import React, { useRef } from "react";
import "./New.css";
import new2 from "../../assets/new2.jpg";
import new4 from "../../assets/new4.jpg";
import new3 from "../../assets/new3.jpg";
import new5 from "../../assets/new5.jpg";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";

const New = () => {

  const slider = useRef();
  let tx =  0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
}

  return (
    <div id="new"className="news">
      <div className="mainnew">
        <h1>WHAT'S HOT</h1>
        <img src={next} alt="" className="next-btn" onClick={slideForward} />
        <img src={back} alt="" className="back-btn" onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="new">
                  <img src={new2} alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="new">
                  <img src={new3} alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="new">
                  <img src={new4} alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="new">
                  <img src={new5} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="cap">
          <h4>THE HYPE IS BUILDING</h4>
          <p>
            We packed the Cheesy Chicken Crispanada <br /> to the brim with pure
            deliciousness.
          </p>
          <button className="newbtn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default New;
