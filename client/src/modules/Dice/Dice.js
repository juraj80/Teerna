import React, { Component } from 'react';
import './Dice.css';
import { DiceContext } from '../../contexts';
import { timeAgo } from '../';

class Dice extends Component {
	static contextType = DiceContext;

	state = {
		roll: undefined,
		rollState: 'idle',
		history: [],
		showHistory: false,
	};

	constructor(props) {
		super(props);
		this.sides = parseInt(props.sides, 10);
	}

	get name() {
		return `d${this.props.sides}`;
	}

	componentDidMount() {
		this.setState({ roll: undefined, history: [] });
		this.diceBag = this.context;
	}

	async roll(type = 'public') {
		const roll = await this.diceBag.throw.bind(this.diceBag)(
			this.sides,
			'public'
		);
		this.setState({ history: this.state.history.concat([roll]) });
		this.setState({ roll: roll, rollState: 'rolling' }, () =>
			setTimeout(() => this.setState({ rollState: 'idle' }), 10)
		);
		return roll;
	}

<<<<<<< HEAD
    async roll(type = 'public') {
      const roll = await this.diceBag.throw.bind(this.diceBag)(this.sides, "public");
      this.setState({history: this.state.history.concat([roll])})
      this.setState(
        {roll: roll, rollState: "rolling"},
        ()=>setTimeout(() => this.setState({rollState: 'idle'}), 10)
      );
      return roll;
    }
=======
	/**
	 * Formats a time to be more human friendly.
	 *
	 * this method is inspired by ― and a customization of ― the method available at https://muffinman.io/blog/javascript-time-ago-function/
	 *
	 * @param {Object} roll to build the time string.
	 * @returns {string} time of the roll.
	 */
	rolledWhen(roll) {
		return timeAgo(roll.time);
	}
>>>>>>> ui-v2

	/**
	 * Hook executed when the connection with the WS is opened
	 */
	onOpen() {}

	render() {
		return (
			<div className={`dice d${this.sides}`}>
				<button type='button' onClick={this.roll.bind(this)}>
					{this.name}
				</button>
				<button
					type='button'
					onClick={() =>
						this.setState({ showHistory: !this.state.showHistory })
					}
				>
					history
				</button>
				<div hidden={!this.state.showHistory} className='history'>
					{this.state.history.map((r, k) => (
						<output className={r.type} key={k}>
							<span className='time'>{this.rolledWhen(r)}</span> {r.result}
						</output>
					))}
				</div>
				<div className={['result', this.state.rollState].join(' ')}>
					<output>{this.state.roll?.result}</output>
				</div>
			</div>
		);
	}
}

export default Dice;
