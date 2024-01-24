import { datas1 } from "./data.json";
import { SmallProfileCard } from "./SmallProfileCard";
import { NavBar } from "../../s1/screens/reusable-components/NavBar";
import { Footer } from "../../s1/screens/reusable-components/Footer";
import "./HofSeasonOne.css";
import blueImg from "../../s1/assets/images/blue.png";
import redImg from "../../s1/assets/images/red.png";
import yellowImg from "../../s1/assets/images/yellow.png";
import greenImg from "../../s1/assets/images/green.png";

export const HofSeasonOne = () => {
  const houses = [
    ["scarletnova", redImg, "#ea4335"],
    ["moonwind", blueImg, "#4285f4"],
    ["goldlight", yellowImg, "#f9ab00"],
    ["emeraldspark", greenImg, "#34a853"],
  ];

  return (
    <div id="hof">
      <NavBar />
      <h1>hall of fame </h1>
      <p>4 houses participated in devsForFun</p>
      <div id="houses">
        {houses.map((house, index) => {
          return (
            <figure className="house" key={index}>
              <img src={house[1]} alt="" />
              <figcaption style={{ color: house[2] }}>{house[0]}</figcaption>
            </figure>
          );
        })}
      </div>
      <h2>cheers to those who finished s1!</h2>
      <div id="hof-box">
        {datas1.map((person, index) => {
          return <SmallProfileCard person={person} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
