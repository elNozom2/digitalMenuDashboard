export type comboType = {
  id: string;
  name: string;
  childrenLength: number;
  level: number;
};

export type itemType = {
  id: string;
  name: string;
  children: itemType[];
};
// { id: "01", name: "Applications :", childrenLength: 3, level: 0 }
