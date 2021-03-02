import { Roll } from './Roll';
import { connection } from '../../WebSocket';

export class DiceBag {
	__dicelist = [];
	__history = [];
	__subscribers = [];
	__pendingThrows = {};

	constructor(dicebag = {}) {
		this.__history = [];
		if (dicebag.history) this.__history = dicebag.history;
		if (dicebag.dicelist) this.__dicelist = dicebag.dicelist;
		this.ws = connection([], [this.onMessage.bind(this)], []);
	}

	onMessage(e) {
		// check if dice result has arrived
		const message = JSON.parse(e.data);
		const toRun = this.__pendingThrows[message.id];
		if (typeof toRun === 'function') {
			this.__pendingThrows[message.id](message);
			delete this.__pendingThrows[message.id];
		}
	}

	get dicelist() {
		return this.__dicelist;
	}

	get history() {
		return this.__history;
	}

	subscribe(subscriptor) {
		this.__subscribers.push(subscriptor);
	}

	addDice(sides) {
		if (!Number.isInteger(sides) || Number(sides) < 1) {
			throw new Error('TypeError: invalid argument: sides must be an integer larger than zero.');
		} else {
			!this.__diceList.includes(sides) && this.__diceList.push(`d${sides}`);
		}
	}

    /**
    * @param {Number} sides the dice will have. Must be an integer.
    * @param {"public"|"gm"|"private"} type of the dice.
    * @returns {Promise<Roll>}
    */
    throw(sides, type) {
        const message = this.ws.sendMessage(`/d${sides}`);
        return new Promise((resolve, reject) => {
            this.__pendingThrows[message.id] = (result) => {
                const roll = new Roll(result);
                resolve(roll);
                this.__history.push(roll);
            };
        });
    }
}
