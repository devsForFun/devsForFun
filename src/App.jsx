import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./s1/ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  );
};
