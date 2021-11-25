import { NO_MATCH } from "../common";

function linearSearch<T>(items: T[], item: T): number {
  for (let i = 0; i < items.length; i++) {
    if (items[i] == item) {
      return i;
    }
  }

  return NO_MATCH;
}

export default linearSearch;
