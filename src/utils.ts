export function getBloodTypeColor(bloodType: string): string {
  switch (bloodType) {
    case "A":
      return "#f1221b";
    case "B":
      return "#12cd2c";
    case "AB":
      return "#b41174";
    case "O":
      return "#070b0d";
    case "F":
      return "#f3600d";
    default:
      return "#03446a";
  }
}
