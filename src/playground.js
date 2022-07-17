// spread operators
const fruits = ["apple", "banana", "orange"];
const vegetables = ["cucumber", "radish"];

console.log([...fruits, ...vegetables]);

// objects
const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);

// tests
// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// export const multiply = (num1, num2) => num1 * num2;

// map
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => number * number);

console.log(squares);
