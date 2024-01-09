import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Registration } from "./screens/Registration";
import { Curriculum } from "./screens/Curriculum";
import { NothingToSeeHere } from "./screens/NothingToSeeHere";
import { Route, Routes } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/registration" Component={Registration} />
      <Route path="/curriculum" Component={Curriculum} />
      <Route path="/nothing-to-see-here" Component={NothingToSeeHere} />
    </Routes>
  );
};
