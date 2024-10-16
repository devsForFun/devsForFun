import "./Club.css";
import glogov from "../../assets/stickers/Google_for_Developers_logomark_color.png";

export const Club = ({ university, twitter, linkedin, instagram, community }) => {
  return (
    <div className="club">
      <div className="club-name">
        <img src={glogov} alt="" />
        <span>GDSC {university}</span>
      </div>
      <div className="club-links">
        <div>
          <a href={twitter}>
            <i className="fa-brands fa-square-x-twitter space-to-right"></i>
          </a>
          <a href={linkedin}>
            <i className="fa-brands fa-linkedin space-to-right"></i>
          </a>
          <a href={instagram}>
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
        <a href={community} className="gdsc-btn">
          visit
        </a>
      </div>
    </div>
  );
};
