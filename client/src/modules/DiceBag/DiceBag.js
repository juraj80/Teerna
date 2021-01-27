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
    __history = [];
    __subscribers = [];

    constructor(diceBag = {}) {
        this.__history = [];
        if (diceBag.history) this.__history = diceBag.history;
        if (diceBag.diceList) this.__diceList = diceBag.diceList;
    }

    get diceList() {
        return this.__diceList;
    }

    get history() {
        return this.__history;
    }

    subscribe(subscriptor) {
        this.__subscribers.push(subscriptor);
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

    /**
     *
     * @param {Number} sides the dice will have. Must be an integer.
     * @param {"public"|"gm"|"private"} type of the dice.
     * @returns {Promise<Roll>}
     */
    throw(sides, type) {
        // TODO: fetch dice results from server. For now, use a promise in order to keep the API consistent.
        return new Promise((resolve, reject) => {
            const result = new Roll(sides, type);
            this.__history.push(result);
            resolve(result);
            this.__subscribers.forEach(fn => fn(this.history));
        });
    }
}