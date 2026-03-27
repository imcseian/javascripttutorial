// async and await 

/*async and await are keywords introduced in ES2017 that help handle asynchronous 
operations in a cleaner and more readable way
async
 is used before a function declaration to indicate that the function will perform asynchronous operations.

Important points:

An async function always returns a Promise

If the function returns a value, JavaScript automatically wraps it in a Promise */

async function getMessage() {
  return "Hello";
}

getMessage().then(result => console.log(result));

/*await

await is used inside an async function to pause the execution until a Promise is resolved.

It makes asynchronous code easier to read and manage*/

async function getUser() {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log(data);
  }
  
  getUser();

  /*
  filter()

👉 Used to select elements from an array based on a condition.

Returns: new array
Does NOT modify original array
*/

ex : const users = [
  { name: 'Ram', active: true },
  { name: 'Sam', active: false }
];

const activeUsers = users.filter(user => user.active);

output : [{ name: 'Ram', active: true }]

/*map()

👉 Transform each element of an array and return a new array of the same length..

Returns: new array
Same length as original*/

ex : const userss = [
  { name: 'Ram' },
  { name: 'Sam' }
];

const names = userss.map(u => u.name);

console.log(names); // ['Ram', 'Sam']

ex : const users1 = [
  { name: 'Ram', age: 20 }
];

const updated = users1.map(u => ({
  ...u,
  isAdult: u.age >= 18
}));

console.log(updated);

/*
reduce() is a higher-order function used to:

Iterate over an array and accumulate all values into a single result (number, object, array, etc.)
| Term         | Meaning        |
| ------------ | -------------- |
| accumulator  | stores result  |
| currentValue | current item   |
| initialValue | starting value |

14. PRO QA AUTOMATION INSIGHT

In real projects:

🧾 Total invoice → reduce
🧑‍🤝‍🧑 Count users → reduce
📊 Build reports → reduce
🗂 Convert API → reduce (object mapping)

*/

synatx : array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);

ex : const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => acc + curr, 0);


/