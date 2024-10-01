import { reactive } from 'vue';
import { Deck } from '../models/deck';
import { Card } from '../models/card';

const introDeck:Deck = new Deck(
    "Try Me",
    [
        new Card("10 min exercise", "Get at least 10 minutes of continuous exercise"),
        new Card("10 min exercise", "Get at least 10 minutes of continuous exercise"),
        new Card("10 min exercise", "Get at least 10 minutes of continuous exercise"),
        new Card("2 hr fast", "Fast for 2 continuous hours"),
        new Card("2 hr phone break", "Phone break for 2 continuous hours"),
    ]
);

const warriorDeck:Deck = new Deck(
    "Bring out the Warrior",
    [
        new Card("10 min exercise", "10 minutes of continuous exercise"),
        new Card("10 min exercise", "10 minutes of continuous exercise"),
        new Card("10 min exercise", "10 minutes of continuous exercise"),
        new Card("10 min exercise", "10 minutes of continuous exercise"),
        new Card("2 hr fast", "Fast for 2 continuous hours"),
        new Card("2 hr fast", "Fast for 2 continuous hours"),
        new Card("2 hr phone break", "Phone break for 2 continuous hours"),
        new Card("Bonus Push-ups", "Extra set of push ups"),
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
        console.log('determine cards');
        this.dayCards = await determineCards(this.activeDeck);
    }
})