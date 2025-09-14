class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `${this.model} was made in ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.model} (${this.year}) has a balance of $${this.balance}`;
  }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo 5D', 2018,30000);
console.log(sedan.info());
