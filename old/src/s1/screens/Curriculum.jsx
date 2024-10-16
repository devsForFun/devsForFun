import "./Curriculum.css";
import { Link } from "react-router-dom";
import data from "./curriculum-components/data.json";
import { Day } from "./curriculum-components/Day";
import { Footer } from "./reusable-components/Footer";
import { NavBar } from "./reusable-components/NavBar";

export const Curriculum = () => {
  const pics = [];
  return (
    <>
      <NavBar />
      <section id="curr">
        <h2>here's the plan</h2>
        <div>
          {data.data.map((item, index) => {
            return (
              <Day
                dayNum={item.dayNum}
                title={item.title}
                content={item.content}
                key={index}
                i={index}
              />
            );
          })}
        </div>
        <p>
          baymax fan art by <span>sadiya</span> (we don't own those characters)
        </p>
      </section>
      <Footer />
    </>
  );
};
