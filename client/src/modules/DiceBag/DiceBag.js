class Roll {
    constructor(sides, type) {
        this.sides = sides;
        this.type = type;
        this.result = Math.floor(Math.random() * this.sides) + 1;
        this.time = new Date();
    }
}

export class DiceBag {

    __diceList = [];

    constructor(diceBag) {
        this.history = [];
        if (diceBag.history) this.history = diceBag.history;
        if (diceBag.diceList) this.__diceList = diceBag.diceList;
    }

    get diceList() {
        return this.__diceList;
    }

    addDice(sides) {
        if (!Number.isInteger(sides) || Number(sides) === 0) {
            throw new Error("TypeError: invalid argument: sides must be an integer larger than zero.");
        } else {
            if (!this.__diceList.includes(sides)) {
                this.__diceList.push(`d${sides}`);
            }
        }
    }

    throw(sides, type) {
        // TODO: fetch dice results from server. For now, use a promise in order to keep the API consistent.
        return new Promise((resolve, reject) => {
            const result = new Roll(sides, type);
            this.history.push(result);
            resolve(result);
        });
    }
}