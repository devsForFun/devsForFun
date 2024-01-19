import "./HowDoesItWork.css";
import howdoesitwork from "../../assets/images/howdoesitwork.png";
import { Link } from "react-router-dom";

export const HowDoesItWork = () => {
  return (
    <section id="hdiw">
      <div id="img-div"></div>
      <div id="content-div">
        <h2>how does it work?</h2>
        <div>
          <span id="tag1" className="tag">
            beginner
          </span>
          <span id="tag2" className="tag">
            14 hours/week
          </span>
          <span id="tag3" className="tag">
            level: hard
          </span>
        </div>
        <p>
          7 classes, each followed by a day for practice. you'll build a cool little project at the
          end. <br /> <br />
          week 1: intro to programming <br />
          week 2: use what you've learned <br />
          week 3: do it yourself <br />
        </p>
        <Link to="/curriculum" className="gdsc-btn">
          open full plan
        </Link>
      </div>
    </section>
  );
};
