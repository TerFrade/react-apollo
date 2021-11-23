import React from "react";
type Props = {
  fullname: string;
  age: number;
  gender: string;
  bloodType: string;
  image: string;
};
export const CharacterItem: React.FC<Props> = ({
  fullname,
  age,
  gender,
  bloodType,
  image,
}: Props) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="back">Back!</div>
      </div>
    </div>
  );
};
