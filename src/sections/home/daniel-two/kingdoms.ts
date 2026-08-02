export type Kingdom = {
  id: string;
  name: string;
  metal: string;
  color: string;
  secondaryColor?: string;
  description: string;
};

export const kingdoms: Kingdom[] = [
  {
    id: "babylon",
    name: "Babylon",
    metal: "Gold",
    color: "#c4a35a",
    description:
      "The head of gold — a kingdom of splendor and authority, the first in Nebuchadnezzar's vision.",
  },
  {
    id: "medo-persia",
    name: "Medo-Persia",
    metal: "Silver",
    color: "#b8b8b8",
    description:
      "The chest and arms of silver — greater in size, ruling with measured strength across the ancient world.",
  },
  {
    id: "greece",
    name: "Greece",
    metal: "Bronze",
    color: "#a0714f",
    description:
      "The belly and thighs of bronze — swift, brilliant, conquering with the force of Alexander's armies.",
  },
  {
    id: "rome",
    name: "Rome",
    metal: "Iron",
    color: "#6e7378",
    description:
      "The legs of iron — crushing and enduring, an empire of law, power, and unyielding dominion.",
  },
  {
    id: "divided",
    name: "Divided Kingdoms",
    metal: "Iron & Clay",
    color: "#6e7378",
    secondaryColor: "#8b7355",
    description:
      "The feet of iron mixed with clay — kingdoms divided, strong yet fragile, unable to cleave together.",
  },
  {
    id: "eternal",
    name: "God's Eternal Kingdom",
    metal: "Stone",
    color: "#d4cfc4",
    description:
      "The stone cut without hands — a kingdom that fills the earth and stands forever.",
  },
];
