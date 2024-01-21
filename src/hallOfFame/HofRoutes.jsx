import { Route, Routes } from "react-router-dom";
import { HallOfFame } from "./HallOfFame";

export const HofRoutes = () => {
  return (
    <Routes>
      <Route path="/hall-of-fame" Component={HallOfFame} />
    </Routes>
  );
};
