export interface Character {
  id: number;
  name: {
    full: string;
  };
  age: number;
  gender: string;
  bloodType: string;
  image: { large: string };
  description: string;
  media: {
    edges: [
      {
        node: { title: { userPreferred: string } };
      }
    ];
  };
}
