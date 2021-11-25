export interface Character {
  id: number;
  name: {
    full: string;
  };
  age: number;
  gender: string;
  bloodType: string;
  image: { medium: string; large: string };
  description: string;
}
