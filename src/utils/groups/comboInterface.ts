import { groupInterface } from "./groupInterface";

export type comboType = {
  id: string;
  name: string;
  childrenLength: number;
  location: [number, number]; //tuple to determine the index of the comboItem in the items array
  level: number;
};

export type itemType = {
  id: string;
  name: string;
  level: number;
  nameEn: string;
  parent: string;
  children: itemType[];
  childrenLength: number;
  groupLevel: groupInterface;
};
// { id: "01", name: "Applications :", childrenLength: 3, level: 0 }
