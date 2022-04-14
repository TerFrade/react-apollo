import React from "react";
import { Link } from "gatsby";
import { Character } from "../../models";
import { getBloodTypeColor } from "../../utils";

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }: Props) => {
  const {
    id,
    name,
    age,
    bloodType,
    gender,
    image,
    media: {
      edges: {
        "0": {
          node: { title },
        },
      },
    },
  } = character;

  return (
    <Link className="card" to={`/character/${id}`}>
      <div className="content">
        <div className="front">
          <img className="imgCard" src={image.large} />
        </div>
        <div className="back" style={{ backgroundColor: getBloodTypeColor(bloodType) }}>
          <h3>{name.full}</h3>
          <p>Age: {age ? age : "Unknown"}</p>
          <p>Gender: {gender ? gender : "Unknown"}</p>
          <p>Blood Type: {bloodType ? bloodType : "Unknown"}</p>
          <p>Anime: {title.userPreferred}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
