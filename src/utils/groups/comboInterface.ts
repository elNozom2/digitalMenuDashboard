import { groupInterface } from "./groupInterface";

export type comboType = {
  code: string;
  parent: string;
  name: string;
  childrenLength: number;
  location: [number, number]; //tuple to determine the index of the comboItem in the items array
  level: number;
};

export type itemType = {
  code: string;
  groupName: string;
  level: number;
  groupNameEn: string;
  parentCode: string;
  children: itemType[];
  childrenLength: number;
};
// { id: "01", name: "Applications :", childrenLength: 3, level: 0 }
