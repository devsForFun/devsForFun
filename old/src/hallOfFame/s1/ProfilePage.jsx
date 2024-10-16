import "./ProfilePage.css";
import blueImg from "../../s1/assets/images/blue.png";
import blueImg2 from "../../s1/assets/images/blue-2.png";
import redImg from "../../s1/assets/images/red.png";
import yellowImg from "../../s1/assets/images/yellow.png";
import greenImg from "../../s1/assets/images/green.png";
import { NavBar } from "../../s1/screens/reusable-components/NavBar";
import { Footer } from "../../s1/screens/reusable-components/Footer";

export const ProfilePage = ({ person }) => {
  const url = "/hall-of-fame/s1/" + person.username;
  let color = person.vibe;
  let img, vibe;
  const projects = [
    ["green screen image editor", "pd2"],
    ["to-do app with local storage task retrieval", "pd1"],
    ["html day 4 notion notes page replica", "rdc"],
    ["grey filter for images", "d14"],
    ["clock app with extra features", "d12"],
    ["counter app", "d12"],
  ];

  switch (color) {
    case "red":
      color = "#ea4335";
      vibe = "scarletnova";
      img = redImg;
      break;
    case "blue":
      color = "#4285f4";
      vibe = "moonwind";
      img = person.gender == "male" ? blueImg2 : blueImg;
      break;
    case "yellow":
      color = "#f9ab00";
      vibe = "goldlight";
      img = yellowImg;
      break;
    case "green":
      color = "#34a853";
      vibe = "emeraldspark";
      img = greenImg;
      break;
  }

  const numAdder = (i) => {
    if (i == 4) {
      return "1";
    } else if (i == 5) {
      return "2";
    } else {
      return "";
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div id="s1-profile">
        <img src={img} alt="" />
        <div>
          <span id="p-name">{person.name}</span>
          <span id="p-club">
            club: <a href="">{person.club}</a>
          </span>
          <span id="p-house">
            house: <span style={{ color: color }}>{vibe}</span>
          </span>
          <span id="p-socials">
            <a href={person.github}>
              <i class="fa-brands fa-github"></i>
            </a>
            <a href={person.linkedin}>
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
      <div id="s1-projects">
        <p>
          here's <span style={{ color: color }}>{person.name}'s</span> work in devsForFun(🚀) s1
        </p>
        <div>
          {projects.map((project, index) => {
            return (
              <p>
                {project[0]}:{" "}
                <a href={person[project[1] + "site" + numAdder(index)]} style={{ color: color }}>
                  live&nbsp;site
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href={person[project[1] + "repo" + numAdder(index)]} style={{ color: color }}>
                  repo
                </a>
              </p>
            );
          })}
        </div>
        <p style={{ color: "white" }}>
          only <span style={{ color: color }}>0.025%</span> finished this program and{" "}
          <span style={{ color: color }}>{person.name}</span> is one of them!
        </p>
      </div>
      <Footer />
    </>
  );
};
