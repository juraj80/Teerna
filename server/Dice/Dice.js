
class Roll {

  static types = ["DM", "private", "public"];

  constructor(sides, type, user) {
    this.sides = parseInt(sides, 10);
    this.type = type;
    this.result = Math.floor(Math.random() * this.sides) + 1;
    this.time = new Date();
    this.user = user;
  }
}

module.exports = {
  Roll
};