import { groupInterface } from "./groupInterface";

export type comboType = {
  id: string;
  name: string;
  childrenLength: number;
  location: [number, number]; //1,2
  level: number;
};

export type itemType = {
  id: string;
  name: string;
  level: number;
  parentCode: string;
  children: itemType[];
  groupLevel: groupInterface;
};
// { id: "01", name: "Applications :", childrenLength: 3, level: 0 }
