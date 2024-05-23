export interface IBaseMood {
  name: string;
  color: string;
  theme: "light" | "dark";
}

export interface IMood extends IBaseMood {
  id: string;
}
