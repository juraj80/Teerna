import {connection} from "../WSocket/WSocket";

class Roll {

    constructor(roll) {
        this.sides = Number(roll.sides);
        this.type = roll.type;
        this.result = Number(roll.result);
        this.time = new Date(roll.time);
        this.id = roll.id;
    }
}

export class DiceBag {

    __diceList = [];
    __history = [];
    __subscribers = [];
    __pendingThrows = {};

    constructor(diceBag = {}) {
        this.__history = [];
        if (diceBag.history) this.__history = diceBag.history;
        if (diceBag.diceList) this.__diceList = diceBag.diceList;
        this.ws = connection([], [this.onMessage.bind(this)], [])
    }

    onMessage(event) {
        // check if a dice result has arrived
        const message = JSON.parse(event.data);
        const toRun = this.__pendingThrows[message.id];
        if (typeof toRun === 'function') {
            this.__pendingThrows[message.id](message);
            delete this.__pendingThrows[message.id];
        }

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
        const diceMessage = `/d${sides}`;
        const message = this.ws.sendMessage(diceMessage);
        return new Promise((resolve, reject) => {
            this.__pendingThrows[message.id] = (result) => {
                const roll = new Roll(result);
                resolve(roll);
                this.__history.push(roll);
            };
        });
    }
}