import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SeasonOne } from "./s1/SeasonOne";

export const App = () => {
  return (
    <BrowserRouter>
      <SeasonOne />
    </BrowserRouter>
  );
};
