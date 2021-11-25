import React from "react";
import { getBloodTypeColor } from "../hooks";
type Props = {
  image: string;
  fullname: string;
  age: number;
  gender: string;
  bloodType: string;
  description: string;
};

export const CharacterSection: React.FC<Props> = ({
  image,
  fullname,
  age,
  gender,
  bloodType,
  description,
}: Props) => {
  const bloodTypeColor = getBloodTypeColor(bloodType);
  return (
    <div className="container">
      <div className="section">
        <div className="heading">
          <img
            className="imgPortrait"
            src={image}
            style={{ borderColor: bloodTypeColor }}
          />
          <h1>{fullname}</h1>
        </div>
        <div className="pillSection">
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Age: {age ? age : "∞"}
          </p>
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Sex: {gender ? gender : "Unknown"}
          </p>
          <p className="pill" style={{ backgroundColor: bloodTypeColor }}>
            Blood: {bloodType ? bloodType : "Unknown"}
          </p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
