import React, {Component} from 'react';
import './Dice.css';
import DiceContext from "../../contexts/DiceContext/DiceContext";

class Dice extends Component {

    static contextType = DiceContext;

    state = {
        roll: undefined,
        rollState: "idle",
        history: [],
        showHistory: false
    };

    constructor(props) {
        super(props);
        this.sides = parseInt(props.sides, 10);
    }

    get name() {
        return `d${this.props.sides}`;
    }

    componentDidMount() {
        this.setState({roll: undefined, history: []})
        this.diceBag = this.context;
    }

    async roll(type = 'public') {
        const roll = await this.diceBag.throw(this.sides, "public");
        this.setState({history: this.state.history.concat([roll])})
        this.setState(
            {roll: roll, rollState: "rolling"},
            ()=>setTimeout(() => this.setState({rollState: 'idle'}), 10)
        );
        return roll;
    }

    /**
     * Formats a time to be more human friendly.
     *
     * this method is inspired by ― and a customization of ― the method available at https://muffinman.io/blog/javascript-time-ago-function/
     *
     * @param {Object} roll to build the time string.
     * @returns {string} time of the roll.
     */
    rolledWhen(roll) {
        const now = new Date().getTime() / 1000;
        const seconds = Math.floor(now - (roll.time.getTime() / 1000));
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (seconds < 5) {
            return 'now';
        } else if (seconds < 60) {
            return `${ seconds }s ago`;
        } else if (minutes < 60) {
            return `${ minutes }m ago`
        } else if (hours < 24) {
            return `${ hours }h ago`;
        } else {
            return `~${ days }d ago`;
        }
    }

    /**
     * Hook executed when the connection with the WS is opened
     */
    onOpen() {
    }

    render() {
        return (
            <div className={`dice d${this.sides}` }>
                <button type="button" onClick={this.roll.bind(this)}>{this.name}</button>
                <button type="button" onClick={() => this.setState({showHistory: !this.state.showHistory})}>history</button>
                <div hidden={!this.state.showHistory} className="history">
                    {(this.state.history.map((r, k) => (
                        <output className={r.type} key={k}><span className="time">{this.rolledWhen(r)}</span> {r.result}</output>
                    )))}
                </div>
                <div className={["result", this.state.rollState].join(" ")}>
                    <output>{this.state.roll?.result}</output>
                </div>
            </div>
        );
    }

}

export default Dice;
