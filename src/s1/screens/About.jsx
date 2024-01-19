import "./About.css";
import { Link } from "react-router-dom";
import { NavBar } from "./reusable-components/NavBar";
import { Footer } from "./reusable-components/Footer";
import "./About.css";
import { Club } from "./about-components/Club";
import clubs from "./about-components/clubs.json";

export const About = () => {
  const list = clubs.clubs;
  return (
    <>
      <NavBar />
      <section id="about">
        <h2>about us</h2>
        <p>
          devsForFun is a program created by four incredible clans of computer wizards (or developer
          student clubs, as they call themselves).
        </p>
        <p>
          this incredibly tough, yet rewarding path has been designed to set you on a path to become
          a computer warrior (developer) of the future.
        </p>
        <Link to="/" className="gdsc-btn">
          i want to try
        </Link>

        <div id="a-socials">
          <p>follow us on socials: </p>
          <p>
            <a href="https://twitter.com/devsForFun">
              <i className="fa-brands fa-square-x-twitter space-to-right"></i>
            </a>
            <a href="https://www.linkedin.com/company/devsforfun/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>

        <div>
          wanna be part of more such events? join us here:
          {list.map((club) => {
            return (
              <Club
                university={club.university}
                twitter={club.twitter}
                linkedin={club.linkedin}
                instagram={club.instagram}
                community={club.community}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
