import React from "react";
import { Character } from "../../models";
import { getBloodTypeColor } from "../../utils";

type Props = {
  character: Character;
};

const CharacterSection: React.FC<Props> = ({ character }: Props) => {
  const {
    name,
    description,
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

  const bloodTypeColor = getBloodTypeColor(bloodType);

  return (
    <div className="container">
      <div className="section">
        <div className="heading">
          <img className="imgPortrait" src={image.large} style={{ borderColor: bloodTypeColor }} />
          <h1>{name.full}</h1>
        </div>
        <div className="pillSection">
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Anime: {title.userPreferred}
          </p>
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Age: {age ? age : "∞"}
          </p>
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Gender: {gender ? gender : "Unknown"}
          </p>
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Blood Type: {bloodType ? bloodType : "Unknown"}
          </p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default CharacterSection;
