import "./NothingToSeeHere.css";
import { Link } from "react-router-dom";
import swing from "../assets/images/undraw_tree_swing_re_pqee.svg";
import glogo from "../assets/images/google-developers-seeklogo.com.svg";

export const NothingToSeeHere = () => {
  return (
    <figure id="ntsh">
      <img
        id="ntsh-img"
        src={swing}
        alt="google developer student clubs raghu engineering college logo"
      />
      <figcaption id="ntsh-caption">Oops! Nothing to see here 😅</figcaption>
      <p>Anyway, now that you're here, why not check out our club?</p>
      <a
        className="gdsc-btn"
        href="https://gdsc.community.dev/raghu-engineering-college-visakhapatnam/"
      >
        <span>Explore GDSC REC</span>
        <img src={glogo} alt="google developer student clubs raghu engineering college logo" />
      </a>
      <p>We will update this soon, check back later!</p>
    </figure>
  );
};
