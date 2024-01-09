import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "./ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  );
};
