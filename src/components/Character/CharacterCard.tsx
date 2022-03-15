import { Link } from "gatsby";
import React from "react";
import { getBloodTypeColor } from "../../hooks";

type Props = {
  id: number;
  fullname: string;
  age: number;
  gender: string;
  bloodType: string;
  image: string;
  showTitle: string;
};

const CharacterCard: React.FC<Props> = ({ id, fullname, age, gender, bloodType, image, showTitle }: Props) => {
  return (
    <Link className="card" to={`/character/${id}`}>
      <div className="content">
        <div className="front">
          <img className="imgCard" src={image} />
        </div>
        <div className="back" style={{ backgroundColor: getBloodTypeColor(bloodType) }}>
          <h3>{fullname}</h3>
          <p>Age: {age ? age : "Unknown"}</p>
          <p>Sex: {gender ? gender : "Unknown"}</p>
          <p>Blood: {bloodType ? bloodType : "Unknown"}</p>
          <p>Anime: {showTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
