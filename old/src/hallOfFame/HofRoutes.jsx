import { Route, Routes } from "react-router-dom";
import { HallOfFame } from "./HallOfFame";
import { datas1 } from "./s1/data.json";
import { ProfilePage } from "./s1/ProfilePage";
import { HofSeasonOne } from "./s1/HofSeasonOne";

export const HofRoutes = () => {
  return (
    <Routes>
      <Route path="/hall-of-fame" Component={HallOfFame} />
      <Route path="/hall-of-fame/s1" Component={HofSeasonOne} />
      {datas1.map((person, index) => {
        return (
          <Route
            key={index}
            path={`hall-of-fame/s1/${person.username}`}
            element={<ProfilePage person={person} />}
          />
        );
      })}
    </Routes>
  );
};
