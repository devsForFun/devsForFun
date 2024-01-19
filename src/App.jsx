import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { S1 } from "./s1/S1";

export const App = () => {
  return (
    <BrowserRouter>
      <S1 />
    </BrowserRouter>
  );
};
