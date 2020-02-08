//===================================================== 1
const hello = function () {
    console.log("Hello World");
}

// Arrow Function
console.log("%c Arrow Function", 'color:orange;');

const welcome = () => console.log("Hello World");
welcome();

const hi = (firstname, lastname) => console.log("Hi", firstname, lastname);
hi("sertac", "guler");

const cube = (x) => x * x * x;
console.log(cube(4));

//===================================================== 2
/*
let number1, number2;

arr = [100, 200, 300, 400];
number0 = arr[0];
number1 = arr[1];

console.log(number0, number1);
*/

// Destructing
console.log("Destructing");

arr = [100, 200, 300, 400];
const [number0, number1] = arr;
console.log(number0, number1);

// Obj Detructing
console.log("%c Obj Destructing", 'color:orange;');

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

//const { a, c, e } = numbers;
//console.log(a, c, e);
const { a: num0, c: num1, e: num2 } = numbers;
console.log(num0, num1, num2);

// Obj
console.log("%c Obj Destructing", 'color:orange;');

const person = {
    name: "Sertac Guler",
    year: 2020,
    salary: 3000,
    showInfos: () => console.log("Infos")
}
const { name: isim, year: yil, salary: maas, showInfos: Infos } = person;
console.log(isim, yil, maas);
Infos();

// Function Detructing
console.log("%c Function Destructing", 'color:orange;');

const getLangs = () => ["Python", "Java", "C++"];
const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

//===================================================== 3
// Spread Operator
console.log("%c Spread Operator", 'color:orange;');

const langs = ["Python", "Java", "C++"];;
console.log(...langs);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...number_all] = nums;
console.log(a, b);
console.log(number_all);

const addNumbers = (a, b, c) => console.log(a + b + c);
const p_numbers = [100, 200, 300];
addNumbers(...p_numbers);

//===================================================== 4
// For in
console.log("%c For in", 'color:orange;');

// Obj
const aPerson = {
    name: "Sertac Guler",
    year: 2020,
    salary: 3000,
    showInfos: () => console.log("Infos")
}
for (let prop in aPerson) {
    console.log('prop: ', prop, '/ aPerson[prop]: ', aPerson[prop]);
}

// Array
const langAll = ["Python", "Java", "C++"];
for (let index in langAll) {
    console.log(index, langs[index]);
}

// String
const name = "Sertac";
for (let index in name) { console.log(index, name[index]); }

// For of
console.log("%c for of", 'color:orange;');

// Array
for (let value of langs) {
    console.log(value);
}

// String
for (let char of name) {
    console.log(char);
}

//===================================================== 4
// Maps
console.log("%c Maps", 'color:orange;');

let myMap = new Map();
console.log(myMap);

const key1 = "Sertac";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;

// Set
myMap.set(key1, "String value");
myMap.set(key2, "Object Literal value");
myMap.set(key3, "Function value");

// Get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

// Map Size

const cities = new Map();

cities.set("Ankara", 5);
cities.set("Istanbul", 15);
cities.set("Izmir", 4);

// for Each
cities.forEach(function (value, key) {
    console.log(key, value);
});

// for of
for (let [key, value] of cities) {
    console.log(key, value);
}

// Map Keys
for (let key of cities.keys()) {
    console.log(key);
}

// Map Values
for (let value of cities.values()) {
    console.log(value);
}

// from Array to Map
const array = [["Key1", "value1"], ["Key2", "value2"]];
const lastMap = new Map(array);
console.log(lastMap);

// from Map to Array
const array_ = Array.from(cities);
console.log(array_);


//===================================================== 4
// Set
console.log("%c Set", 'color:orange;');

const mySet = new Set();

mySet.add(100);
mySet.add(3.14);
mySet.add("Sertac");
mySet.add({ a: 1, b: 2 });
mySet.add(true);

const mySet2 = new Set([100, true, "Guler", { a: 1, b: 2 }]);

// Size
console.log(mySet.size);

// Delete
mySet.delete("Sertac");

// Has Method
console.log(mySet2.has("Guler"));

//for Each
mySet.forEach(function (value) {
    console.log(value)
});

// for of
for (let value of mySet) {
    console.log(value);
}

// from Set to Array
const array_2 = Array(mySet);
console.log(array);