import { comboType } from "./comboInterface";
import { itemType } from "./comboInterface";
export default class groups {
  comboItem: comboType[] = [];
  items: itemType[] = [
    {
      id: "01",
      name: "Applications :",
      children: [
        { id: "0101", name: "Calendar : app", children: [] },
        { id: "0102", name: "Chrome : app", children: [] },
        { id: "0103", name: "Webstorm : app", children: [] },
      ],
    },
    {
      id: "02",
      name: "Downloads :",
      children: [
        { id: "0201", name: "November : pdf", children: [] },
        { id: "0202", name: "October : pdf", children: [] },
      ],
    },
    {
      id: "03",
      name: "Documents :",
      children: [
        {
          id: "0301",
          name: "vuetify :",
          children: [
            {
              id: "030101",
              name: "src :",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  constructor() {
    this.insertComboData();
  }
  generateComboItem = (item: itemType, level: number): comboType => {
    const comboItem: comboType = {
      id: item.id,
      name: item.name,
      childrenLength: item.children.length,
      level,
    };
    return comboItem;
  };
  insertComboData = () => {
    for (const item of this.items) {
      this.comboItem.push(this.generateComboItem(item, 0));
      for (const childItem of item.children) {
        this.comboItem.push(this.generateComboItem(childItem, 1));
      }
    }
  };
}

// [
//     { id: "01", name: "Applications :", childrenLength: 3, level: 0 },
//     { id: "02", name: "Downloads :", childrenLength: 19, level: 0 },
//     { id: "0101", name: "Calendar : app", childrenLength: 0, level: 1 },
//     { id: "0102", name: "Chrome : app", childrenLength: 0, level: 1 },
//     { id: "0103", name: "Webstorm : app", childrenLength: 0, level: 1 },
//     { id: "0201", name: "November : pdf", childrenLength: 0, level: 1 },
//     { id: "0202", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0203", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "03", name: "Documents :", childrenLength: 1, level: 0 },
//     { id: "0301", name: "vuetify :", childrenLength: 1, level: 1 },
//     { id: "0204", name: "Vuex", childrenLength: 0, level: 1 },
//     { id: "0205", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0206", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "0207", name: "November : pdf", childrenLength: 0, level: 1 },
//     { id: "0208", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0209", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "0210", name: "November : pdf", childrenLength: 0, level: 1 },
//     { id: "0211", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0212", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "0213", name: "November : pdf", childrenLength: 0, level: 1 },
//     { id: "0214", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0215", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "0216", name: "November : pdf", childrenLength: 0, level: 1 },
//     { id: "0217", name: "October : pdf", childrenLength: 0, level: 1 },
//     { id: "0218", name: "Tutorial : html", childrenLength: 0, level: 1 },
//     { id: "0219", name: "November : pdf", childrenLength: 0, level: 1 },
//   ]
