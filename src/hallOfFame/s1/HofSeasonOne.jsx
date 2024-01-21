import { datas1 } from "./data.json";
import { SmallProfileCard } from "./SmallProfileCard";

export const HofSeasonOne = () => {
  return (
    <div>
      <h1>HofSeasonOne</h1>
      {datas1.map((person, index) => {
        return <SmallProfileCard person={person} key={index} />;
      })}
    </div>
  );
};
