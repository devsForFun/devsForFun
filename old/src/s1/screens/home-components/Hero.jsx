import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-content">
        <main>
          <p>
            try to learn <br />
            how to code <br />
            for 3 weeks. <br />
            you in?
          </p>
          <div id="tags">
            <span id="tag1" className="tag">
              $ free
            </span>
            <span id="tag4" className="tag">
              need a computer/laptop
            </span>
            {/* <span id="tag4" className="tag">
              nov 11
            </span> */}
            <span id="tag3" className="tag">
              s1 is over
            </span>
          </div>
          <div id="hero-btns">
            {/* <a href="https://forms.gle/pN5fQZgLKeqfQbcTA" className="gdsc-btn">
              i'm in
            </a>
            <a href="#hdiw" className="gdsc-btn">
              tell me more
            </a> */}
            <Link to="/hall-of-fame/s1" className="gdsc-btn">
              visit s1 hall of fame
            </Link>
          </div>
        </main>
        <aside>
          <div>
            <div id="rajput">
              <p>"i want to win a hackathon"</p>
            </div>
            <div id="maurya">
              <p>"i want to create a web app"</p>
            </div>
          </div>
          <div>
            <div id="gupta">
              <p>"i want to get a job"</p>
            </div>
            <div id="chanukya">
              <p>"i want to freelance and travel"</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
