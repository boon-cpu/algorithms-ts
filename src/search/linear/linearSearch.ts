import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {
    console.log('Foo')
    for(let index=0; index<items.length;index++) {
        console.log(`Comapring ${items[index]} to ${item}`)
        if(items[index] === item) {
            console.log(`MATCH FOUND AT ${index}`)
            return index;
        }
    }

    return NO_MATCH;
}

export default linearSearch;