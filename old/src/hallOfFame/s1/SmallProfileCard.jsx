import { Link, BrowserRouter } from "react-router-dom";
import blueImg from "../../s1/assets/images/blue.png";
import blueImg2 from "../../s1/assets/images/blue-2.png";
import redImg from "../../s1/assets/images/red.png";
import "./SmallProfileCard.css";

export const SmallProfileCard = ({ person }) => {
  const url = "/hall-of-fame/s1/" + person.username;
  let color = person.vibe;
  let secColor;
  let img;
  if (color == "red") {
    color = "#ea4335";
    secColor = "#f28b82";
    img = redImg;
  } else if (color == "blue") {
    color = "#4285f4";
    secColor = "#8ab4f8";
    if (person.gender == "male") {
      img = blueImg2;
    } else {
      img = blueImg;
    }
  }

  return (
    <div className="s1-spcard" style={{ backgroundColor: color }}>
      <img src={img} alt="" style={{ backgroundColor: secColor }} />
      <p>{person.name}</p>
      <Link to={url}>
        <span>view their work</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-solid fa-chevron-right"></i>
      </Link>
    </div>
  );
};
