import data from "./data.json";
import "./Day.css";
import gdsccolorlogo from "../../assets/stickers/Google_for_Developers_logomark_color.png";
import intro from "../../assets/stickers/intro.png";
import htmll from "../../assets/stickers/html.png";
import algos from "../../assets/stickers/algos.png";
import jss2 from "../../assets/stickers/js2.png";
import gitt from "../../assets/stickers/git.png";
import jss from "../../assets/stickers/js.png";
import shorts from "../../assets/stickers/short.png";
import fat from "../../assets/stickers/fat.png";
import web from "../../assets/stickers/web.png";

export const Day = ({ dayNum, title, content, i }) => {
  const stickers = [intro, htmll, algos, jss2, gitt, jss, shorts, fat, web];
  return (
    <div className="day">
      <div>
        <h3>day {dayNum}</h3>
        <p>
          <span id="day-title">{title}</span> <br />
          {content.map((line, i) => {
            return (
              <span key={i}>
                <span>{line}</span>
                <br />
              </span>
            );
          })}
        </p>
      </div>
      <img src={stickers[i]} alt="" />
    </div>
  );
};
