import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Curriculum } from "./screens/Curriculum";
import { NothingToSeeHere } from "./screens/NothingToSeeHere";
import { Route, Routes } from "react-router-dom";
import "./SeasonOne.css";

export const SeasonOne = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" Component={Home} />{" "}
      {/*Replace this with s2 home after creating s2*/}
      <Route path="/s1" Component={Home} />
      <Route path="/s1/about" Component={About} />
      <Route path="/s1/curriculum" Component={Curriculum} />
      <Route path="/s1/nothing-to-see-here" Component={NothingToSeeHere} />
    </Routes>
  );
};
