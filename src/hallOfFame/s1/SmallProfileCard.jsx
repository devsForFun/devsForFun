import { Link, BrowserRouter } from "react-router-dom";

export const SmallProfileCard = ({ person }) => {
  const url = "/hall-of-fame/s1/" + person.username;
  return (
    <div>
      <h1>SmallProfileCard</h1>
      <b>Name: </b>
      <span>{person.name}</span>
      <BrowserRouter>
        <Link to={url}>View their work</Link>
      </BrowserRouter>
    </div>
  );
};
