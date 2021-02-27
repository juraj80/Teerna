class Roll {
	constructor(roll) {
		const { id, sides, type, result, time } = roll;
		this.id = id;
		this.sides = Number(sides);
		this.type = type;
		this.result = Number(result);
		this.time = new Date(time);
	}
}

export { Roll };
