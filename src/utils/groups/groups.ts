import { group } from "./classesLevels/levels";
import { comboType } from "./comboInterface";
import { itemType } from "./comboInterface";
export default class groups {
  comboItem: comboType[] = [];
  // items: itemType[] = [
  //   {
  //     id: "01",
  //     parentCode: "",
  //     name: "Applications :",
  //     level: 0,
  //     groupLevel: new group(),
  //     children: [
  //       {
  //         id: "0101",
  //         parentCode: "01",
  //         name: "Calendar : app",
  //         level: 1,
  //         groupLevel: new group(),
  //         children: [],
  //       },
  //       {
  //         id: "0102",
  //         parentCode: "01",
  //         name: "Chrome : app",
  //         level: 1,
  //         groupLevel: new group(),
  //         children: [],
  //       },
  //       {
  //         id: "0103",
  //         parentCode: "01",
  //         name: "Webstorm : app",
  //         level: 1,
  //         groupLevel: new group(),

  //         children: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "02",
  //     parentCode: "",
  //     name: "Downloads :",
  //     level: 0,
  //     groupLevel: new group(),
  //     children: [
  //       {
  //         id: "0201",
  //         parentCode: "02",
  //         name: "November : pdf",
  //         level: 1,
  //         groupLevel: new group(),

  //         children: [],
  //       },
  //       {
  //         id: "0202",
  //         parentCode: "02",
  //         name: "October : pdf",
  //         level: 1,
  //         groupLevel: new group(),
  //         children: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: "03",
  //     parentCode: "",
  //     name: "Documents :",
  //     groupLevel: new group(),
  //     level: 0,
  //     children: [
  //       {
  //         id: "0301",
  //         name: "vuetify :",
  //         parentCode: "03",
  //         level: 1,
  //         groupLevel: new group(),

  //         children: [
  //           {
  //             id: "030101",
  //             parentCode: "0301",
  //             groupLevel: new group(),
  //             name: "src :",
  //             level: 2,
  //             children: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  constructor() {}
  generateComboItem = (
    item: itemType,
    location: [number, number]
  ): comboType => {
    const comboItem: comboType = {
      id: item.id,
      name: item.name,
      childrenLength: item.childrenLength,
      level: item.level,
      location,
    };
    return comboItem;
  };
  insertComboData = (items: itemType[]) => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.comboItem.push(this.generateComboItem(item, [i, -1]));

      for (let j = 0; j < item.childrenLength; j++) {
        this.comboItem.push(this.generateComboItem(item.children[j], [i, j]));
      }
    }
    // for (const item of this.items) {
    //   for (const childItem of item.children) {
    //     this.comboItem.push(this.generateComboItem(childItem, 1));
    //   }
    // }
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
