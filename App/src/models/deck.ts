import type {Card} from "./card";

class Deck {
    title:string;
    cards:Card[];

    constructor(title:string, cards:Card[] = []) {
        this.title = title;
        this.cards = cards;
    }
}

export {Deck};