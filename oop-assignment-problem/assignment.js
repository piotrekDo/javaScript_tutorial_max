class Course {
  #title;
  #length;
  #price;

  constructor(title, length, price) {
    if(price < 0) throw 'Invalid value for price'
    this.#title = title, 
    this.#length = length, 
    this.#price = price
  }

  get price() {
    return `${this.#price}\$`;
  }

  set price(newPrice) {
    if (newPrice > -1) this.#price = newPrice;
    else throw 'Invalid value for a price!';
  }

  getValue() {
    return this.#length / this.#price;
  }

  print() {
    console.log(`${this.#title}: ${this.#length}min for only ${this.#price}\$`);
  }
}

class PracticalCourse extends Course {
  numOfExercises;

  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }

  print() {
    super.print();
    console.log(`with ${this.numOfExercises} excercises`);
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('wowow');
  }
}

const course1 = new Course('title1', 123, 12.99);
const course2 = new Course('title2', 321, 122.99);

console.log(course1);
console.log(course2);

console.log(course1.getValue());
console.log(course2.getValue());
course1.print();
course2.print();

const practicalCourse = new PracticalCourse('practical course 1', 321, 200.3, 12);
const theoreticalCourse = new TheoreticalCourse('theoritical course 1', 4321, 230);

practicalCourse.print();
theoreticalCourse.publish();
