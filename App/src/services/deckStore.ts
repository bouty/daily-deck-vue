import { reactive } from 'vue';
import { Deck } from '../models/deck';
import { Card } from '../models/card';

const introDeck:Deck = new Deck(
    "Try me",
    [
        new Card("10m E","10 Minute Exercise"),
        new Card("10m E", "10 Minute Exercise"),
        new Card("10m E", "10 Minute Exercise"),

        new Card("2h F", "2 Hour Fast",),
        
        new Card("5m M", "5 Minute Meditation",),
        new Card("5m M", "5 Minute Meditation",),

        new Card("2h SB", "2 Hour Screen Break",),

        new Card("&#189; Caf", "Half Normal Caffeine",),
    ]
);

const warriorDeck:Deck = new Deck(
    "Bring out the warrior",
    [
        new Card("10m E","10 Minute Exercise"),
        new Card("10m E", "10 Minute Exercise"),
        new Card("10m E", "10 Minute Exercise"),
        new Card("10m E", "10 Minute Exercise"),

        new Card("2h F", "2 Hour Fast",),
        new Card("2h F", "2 Hour Fast",),

        new Card("5m M", "5 Minute Meditation",),
        new Card("5m M", "5 Minute Meditation",),
        
        new Card("30s C", "30 Second Cold Plunge",),
        new Card("30s C", "30 Second Cold Plunge",),
        new Card("30s C", "30 Second Cold Plunge",),

        new Card("2h SB", "2 Hour Screen Break",),

        new Card("&#189; Caf", "Half Normal Caffeine",),
        new Card("&#189; Caf", "Half Normal Caffeine",),

        new Card("Ex P", "Extra Pushup Set"),
    ]
);

async function determineCards(activeDeck:Deck): Promise<Card[]> {
    const trueFlag = '1';
    const url = `https://www.random.org/integers/?num=${activeDeck.cards.length}&min=0&max=1&col=1&base=2&format=plain&rnd=new`;

    const response = await fetch(url);
    const data = await response.text();
    const cardFlags = data.split('\n'); // This results in an empty item at the end, we won't get to it anyway by iterating over the deck

    const cards: Card[] = [];
    for (let i = 0; i < activeDeck.cards.length; i++) {
        if (trueFlag === cardFlags[i]) {
            cards.push(activeDeck.cards[i]);
        }
    }

    return cards;
}

export const deckStore = reactive({
    activeDeck: warriorDeck,
    dayCards: [] as Card[],
    async determineCards() {
        this.dayCards = await determineCards(this.activeDeck);
    }
})