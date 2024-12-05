// Task 2

let task2 = "32, 31, 34, 36, 31";

// Way 1

console.log(task2.split(",").join("."));

// Way 2

console.log(task2.replaceAll(",", "."));

// Task 3

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [first, second, ...others] = array;

console.log("\nFirst: ", first);
console.log("Second: ", second);
console.log("Rest: ", others);

// Task 4

console.log("\nMaximum element: ", Math.max(...array));

// Task 5

let array2 = [1, 2, 3, 4, 5];

let copyArray = [...array2];
copyArray = copyArray.map((elem) => Math.pow(elem, 2));

console.log("\nOriginal: ", array2);
console.log("Copy: ", copyArray);
