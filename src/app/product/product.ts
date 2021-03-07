export class Product {
    ticker: string;
    name: string;
    amount: number;
    price: number;
    exchangeRate: number;
    exchangeSpread: number;

    constructor (value: any) {
        this.ticker = value.ticker;
        this.name = value.name;
        this.amount = value.amount;
        this.price = value.price;
        this.exchangeRate = value.exchangeRate;
        this.exchangeSpread = value.exchangeSpread;
        
    }

}