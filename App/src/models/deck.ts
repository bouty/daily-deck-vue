import type {Card} from "./card";

class Deck {
    caption:string;
    cards:Card[];

    constructor(caption:string, cards:Card[] = []) {
        this.caption = caption;
        this.cards = cards;
    }
}

export {Deck};