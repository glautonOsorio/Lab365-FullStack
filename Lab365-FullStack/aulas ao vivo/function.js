const student = {
  name: "Roberto",
  age: 456,
  money: 666666,
};

console.log(`students`);

const stringJSON = JSON.stringify(student);
console.log(typeof stringJSON);
const newStudent = JSON.parse(stringJSON);
