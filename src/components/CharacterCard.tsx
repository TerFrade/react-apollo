import { Link } from "gatsby";
import React from "react";
type Props = {
  id: number;
  fullname: string;
  age: number;
  gender: string;
  bloodType: string;
  image: string;
};

export const CharacterCard: React.FC<Props> = ({
  id,
  fullname,
  age,
  gender,
  bloodType,
  image,
}: Props) => {
  const getBackGroundColor = () => {
    switch (bloodType) {
      case "A":
        return "#fb312b";
      case "B":
        return "#12cd2c";
      case "AB":
        return "#b41174";
      case "O":
        return "#252525";
      default:
        return "#03446a";
    }
  };
  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <div className="content">
          <div className="front">
            <img src={image} />
          </div>
          <div
            className="back"
            style={{ backgroundColor: getBackGroundColor() }}
          >
            <h3>{fullname}</h3>
            <p>{age ? age : "∞"}</p>
            <p>{gender ? gender : "Unknown"}</p>
            <p>{bloodType ? bloodType : "Unknown"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
