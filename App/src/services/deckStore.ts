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
)

async function determineCards(activeDeck:Deck): Promise<Card[]> {
    const url = `https://www.random.org/integers/?num=${activeDeck.cards.length}&min=0&max=1&col=1&base=2&format=plain&rnd=new`;

    const response = await fetch(url);
    const data = await response.text();

    console.log(data);

    return [];
}


export const deckStore = reactive({
    activeDeck: introDeck,
    dayCards: [] as Card[],
    async determineCards() {
        console.log('determine cards');
        this.dayCards = await determineCards(this.activeDeck);
    }
})