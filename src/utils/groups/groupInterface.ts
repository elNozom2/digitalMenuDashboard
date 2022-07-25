import { itemType } from "./comboInterface";

export interface groupInterface {
  generateGroupCode(currentItem: itemType): string;
}
