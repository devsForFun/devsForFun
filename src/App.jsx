import { BrowserRouter } from "react-router-dom";
import { SeasonOne } from "./s1/SeasonOne";
import { HofRoutes } from "./hallOfFame/HofRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <SeasonOne /> */}
      <HofRoutes />
    </BrowserRouter>
  );
};
