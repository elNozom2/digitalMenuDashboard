import { itemType } from "../comboInterface";
import { groupInterface } from "../groupInterface";
const convertCurrentItemToStr = (item: number): string => {
  let strItem = item.toString();
  if (item <= 9) {
    strItem = `0${item}`;
  }
  return strItem;
};
export class group implements groupInterface {
  generateGroupCode(currentItem: itemType): string {
    return `${currentItem.id}${convertCurrentItemToStr(
      currentItem.children.length + 1
    )}`;
  }
}

// generateCode(currentItem, level) {
// console.log("generate code", currentItem, level);
// if (currentItem <= 9) {
// currentItem = `0${currentItem}`;
// }
// if (level == 0) {
// this.categoryCode = `${currentItem}`;
// } else if (level == 1) {
// this.categoryCode = `${this.form.parentCode}${currentItem}`; //4
// } else {
// this.categoryCode = `${this.form.parentCode}${currentItem}`; //6
// }
// },
