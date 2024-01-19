import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { S1 } from "./s1/s1.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <S1 />
    </BrowserRouter>
  );
};
