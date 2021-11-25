import React from "react";
import { getBloodTypeColor } from "../hooks";
type Props = {
  id: number;
  image: string;
  fullname: string;
  age: number;
  gender: string;
  bloodType: string;
  description: string;
};

export const CharacterSection: React.FC<Props> = ({
  id,
  image,
  fullname,
  age,
  gender,
  bloodType,
  description,
}: Props) => {
  return (
    <div className="container">
      <div className="section">
        <div className="heading">
          <img
            className="imgRound"
            src={image}
            style={{ borderColor: getBloodTypeColor(bloodType) }}
          />
          <h1>{fullname}</h1>
        </div>
        <div>extra info pills</div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
