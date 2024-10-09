import type {Card} from "./card";

class CardStorage {
    public timestamp:string = '';
    public cards:Card[] = [];
}

export {CardStorage};