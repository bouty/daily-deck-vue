import { CardStorage } from "@/models/cardStorage";
const _dayCardsKey = "day-cards";

class StorageService {

    public getCards():CardStorage | undefined {
        return this.getStoredItem<CardStorage | undefined>(_dayCardsKey, undefined);
    }

    public saveCards(cardStorage:CardStorage): void {
        this.saveStoredItem(_dayCardsKey, cardStorage);
    }

    public deleteCards(): void {
        localStorage.removeItem(_dayCardsKey);
    }

    private getStoredItem<PType>(preferenceKey: string, defaultValue: PType): PType {
        try {
            const storedString = localStorage.getItem(preferenceKey);
            return (storedString === undefined || storedString == null)
                ? defaultValue
                : JSON.parse(storedString) as PType;
        }
        catch (err) {
            console.error(`Storage fail for key {${preferenceKey}} - ${err}`);
            return defaultValue;
        }
    }

    private saveStoredItem<PType>(preferenceKey: string, value: PType): void {
        localStorage.setItem(preferenceKey, JSON.stringify(value));
    }
}

export { StorageService };