//1. --> Can we reverse a string without Using Can we reverse a string without reverse(). and with reverese
   // using reverse ()
   export const stringrevereseusingrevere = (str) => {
      return str.split('').reverse().join('');

    };

   
    console.log(stringrevereseusingrevere('Hello')); // olleH


  

    // using without reverse()


    export const withoutreversemethod =(str)=>{

      let result = ''
      for (let i=str.length-1; i>=0;i--)
      {
         result+=str[i]

      }
      return result ;



    }

    console.log(withoutreversemethod('RMJL'))


    //2--> . check given string is pallndrome or not
    //----------------------------------------------------------------
    export const pallindromecheck=(str)=>{


      const palresult =  str.split('').reverse().join('')
      if(str==palresult)
      {
         console.log(`${str} is a palindrome`);
      }
      else{
         console.log(`${str} its not a pallindrome`)
      }
      

    }
    pallindromecheck('ello')

    //4.-->What is Closure? 
    //----------------------------------------------------------------
    // A function remembers the variables that were created outside it, 
    // even after that outside function is finished

   function school(){

      let pencil ='blue pencil'

      return function student (){ 
         // this function remembers outer fucntion variable 
      // ( means : student function remembers school function variable ie : pencil )

            console.log(pencil)
      }
      
   }

   const mystudent = school()
   mystudent()  // blue pencil

   /* cypress example for clouser 
      function login (username){
         return ()=>{
             cy.log(username)
}
      }

      const userlogin =login('admin')
      userlogin() // admin


   */
//5--> double and tripple equals? == vs ===
//-------------------------------------------------------------------------------------
/*
== compares values after type conversion, while === compares both value and type without conversion.
(Note : Type conversion means JavaScript automatically changes one data type to another before comparison.
ex : 
true == 1   // true
Why?
first it will convert true to 1 then compare 
true becomes 1
1 == 1 → true)
*/
    
let age = '15'
console.log(age==15) // true
console.log(age===15) // false
//here we can convert this and make it true  (typecasting)
let age = "15";

console.log(Number(age) === 15); // true

/* -----------------------------------------------------------------------------------------------
6---> remove duplicates in array using ..new Set(aary) and without
here set will remove duplicates 
and three dots this is spread operator,  This  spread operator (...) converts 
the array-like Cypress/jQuery collection into a real JavaScript array
 */
   let r=[1,2,3,3,4,5,6,6,7,8,8,11,10,18,13]
    let newr=[...new Set(r)]
    console.log(newr)

   //  newram.sort((a,b)=>a-b)
   //  console.log(newram).   // this is sorting of arry in ascending order JavaScript sort() sorts elements as strings by default.
//For numeric sorting, a compare function must be provided.

// remove duplicate in arry without set 
let j =['CTeacher', 'QualityAnalyst', 'Balshali', 'Putta', 'IaS', 'SoftwareEngineer', 'SoftwareEngineer', 'Teacher',  'Teacher' ]

let newj=[]

for(let i=0; i<j.length; i++)
{
   if(!newj.includes(j[i]))
{

      newj.push(j[i])
     
}
}
console.log(newj)

/* -----------------------------------------------------------------------------------------------
7.----> count the duplicate values in array 
*/


let toys =['car','cat','bat','ball','ball','car', 'car']

let count={}
for (let i=0; i< toys.length; i++){
   if(count[toys[i]])
   {
         count[toys[i]]++;
   }
   else{

      count[toys[i]]=1
   }
}

console.log(count)


/* -----------------------------------------------------------------------------------------------
 ✅ 8.----> Promise vs Callback

Definition of Callback

A callback is a function that is passed as an argument to another function and is executed after an asynchronous operation is completed.

📌 Simple meaning:
👉 “I’ll call you back when my work is done.”

Definition of Promise

A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and returns a value in the future.

📌 Simple meaning:
👉 “I promise to give you the result later — success or failure.”

| Aspect          | Callback         | Promise                     |
| --------------- | ---------------- | --------------------------- |
| Nature          | Function         | Object                      |
| Readability     | Poor when nested | Clean & chainable           |
| Error handling  | Difficult        | Centralized with `.catch()` |
| Chaining        | ❌ No             | ✅ Yes                      |
| Maintainability | Low              | High                        |
| Modern JS       | Legacy           | Standard                    |

Cypress Relation (Very Important – Say This)

Cypress does not use callbacks or async/await directly.
Internally, Cypress commands behave like promises by being chainable and automatically resolved 
in sequence, which prevents callback hell and makes tests more readable and reliabl


*/
//callback example :

function washHands(callback) {
  setTimeout(() => {
    callback('Hands are clean');
  }, 1000);
}

washHands((message) => {
  console.log(message);
});

// promise exmaple 

function handwashs(){

  return new promise ((resolve)=>{
      setTimeout(()=>{
          resolve('hands are cleaned by promise ')

      },1000)

  })
}
handwashs().then((message)=>{

  console.log(message);
})


/* -----------------------------------------------------------------------------------------------
 ✅ 11.----> Shallow vs Deep Copy
Shallow Copy

A shallow copy creates a new object, but nested objects still reference the same memory location.
*/
let bag1 = {
  color: 'red',
  box: {
    toy: 'car'
  }
};

let bag2 = { ...bag1 }; // shallow copy

bag2.box.toy = 'ball';

console.log(bag1.box.toy); // 👉 ball 😮


//✅ Deep Copy

//A deep copy creates a completely independent copy, including all nested objects.


let baga1 = {
  color: 'red',
  box: {
    toy: 'car'
  }
};

let baga2 = JSON.parse(JSON.stringify(baga1)); // deep copy

baga2.box.toy = 'ball';

console.log(bag1.box.toy); // 👉 car 😄



JSON.stringify() vs JSON.parse()

//✅JSON.stringify()

//👉 Converts JavaScript object → JSON string

const user = { name: "Ram", age: 25 };

const jsonString = JSON.stringify(user);

console.log(jsonString);
// '{
// "name":"Ram",
// "age":25
// }'

//✅ JSON.parse()

//👉 Converts JSON string → JavaScript object

const jsonString = '{"name":"Ram","age":25}';

const user = JSON.parse(jsonString);

console.log(user.name); // Ram
/* -----------------------------------------------------------------------------------------------
✅ 27.----> cy.wrap ()

cy.wrap() is used to convert a normal JavaScript object/element/value into a 
Cypress chainable object so that you can use Cypress commands (.click(), .should(), etc.) on it

cy.get('home').then (($el)=>{
  cy.wrap($el).should ('contain', dashboard)
 ) }

  ex -2 : 
  cy.get ('button').each(($el)=>{
    cy.wrap($el).click()
    
)}

    ex-3 

    cy.get('product').each (($product)=>{
      cy.wrap($prodcut)
      .find('price')
      .invoke('text')
      .then ((price)=>{
        
        consloe.log(price)
        })
      
      
      })

*/

/* -----------------------------------------------------------------------------------------------
✅ 80.----> diffeence between should and expect 
should() is a Cypress command with automatic retry capability, whereas expect() 
is a Chai assertion used inside JavaScript logic and does not retry

| Feature    | `should()`          | `expect()`                  |
| ---------- | ------------------- | --------------------------- |
| Type       | Cypress command     | Chai assertion              |
| Retry      | ✅ Auto-retry        | ❌ No retry                  |
| Usage      | Command chain       | Inside `then()` / callbacks |
| Async-safe | ✅ Yes               | ❌ No                        |
| Best for   | UI state validation | Business logic / values     |


ex : 
cy.get('input')
  .should('be.visible')
  .and('have.value', 'admin');

  ex 2:  expect 

  cy.get('h1').then(($el) => {
  expect($el.text()).to.equal('Dashboard');
});


ex : 3

cy.request('/users').then((res) => {
  expect(res.status).to.eq(200);
});

When to Use expect() (Senior-Level)

Use expect() when:

Validating calculated values

API response bodies

Loop logic (each)

Conditional assertions


*/


/* -----------------------------------------------------------------------------------------------
✅ 81.----> .each


In Cypress, .each() allows me to loop through a set of matched elements and apply validation or 
interaction on each element while still respecting Cypress’s command chaining mode

cy.get('.row').each(($row) => {
  cy.wrap($row).click();
});


*/


/* -----------------------------------------------------------------------------------------------
✅ 82.----> what is invoke

invoke() is used to call a function or access a property 
on a DOM element or JavaScript object inside a Cypress chain

 ex : 1 Getting an Attribute

 cy.get('img')
  .invoke('attr', 'src')
  .then((src) => {
    cy.log(src);
  });

  Here, invoke() is calling jQuery’s attr() method

  ex : 2 Reading Text (Alternative to .should('have.text'))

  cy.get('h1')
  .invoke('text')
  .then((text) => {
    expect(text).to.include('Dashboard');
  });

  hy use invoke here?
When you need the value for custom logic, not just assertion.



*/


/* -----------------------------------------------------------------------------------------------
✅ 83.---->  how to inspect image 
 first i will check the Basic Image validation is on dom level 

 image element exists

src attribute is present

Image is visible

 cy.get('img[alt="Company Logo"]')
  .should('be.visible')
  .and('have.attr', 'src')
  .and('not.be.empty');

  next i will check is really image is loaded or not why i will check this bcz sometimes src attribute is 
  present but image is broken or not loaded then i will check is it really loaded or not using <naturalWidth>
   
  cy.get('img[alt="Company Logo"]').should(($img)=>{

   expect($img[0].naturalwidth).to.be.graterThan(0)
   
   })

Note : naturalWidth greater than zero confirms the image actually loaded, not just present in DOM


*/


/* -----------------------------------------------------------------------------------------------
✅ 84.---->  how you gonna do tests in diffrent resolution in cypress

In Cypress, I test different screen resolutions using cy.viewport()

Syntax : cy.viewport(width, height)
         cy.viewport('iphone-6')
 example code for cypress it block level and before each level  : 

 it('Check layout on mobile', () => {
  cy.viewport(375, 667);
  cy.visit('/dashboard');

  cy.get('.hamburger-menu').should('be.visible');
});

ex 2 : 
describe('Dashboard - Desktop View', () => {

  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit('/dashboard');
  });


  we configure default view port in cypress.config.js this will applicable for all tests 
  module.exports = {
  viewportWidth: 1366,
  viewportHeight: 768
};

*/



/* -----------------------------------------------------------------------------------------------
✅ 85.----> Explain about Cypress Hooks 
Hooks are special functions that let you run code before or after your tests

| Hook           | When it runs                   |
| -------------- | ------------------------------ |
| `before()`     | Runs **once before ALL tests** |
| `after()`      | Runs **once after ALL tests**  |
| `beforeEach()` | Runs **before EACH test**      |
| `afterEach()`  | Runs **after EACH test**       |

Cypress Example :
-------------------

describe('Login Tests', () => {

  before(() => {
    cy.log('Setup once');
  });

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Valid login', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button').click();
  });

  it('Invalid login', () => {
    cy.get('#username').type('wrong');
    cy.get('#password').type('wrong');
    cy.get('button').click();
  });

  afterEach(() => {
    cy.log('Test completed');
  });

  after(() => {
    cy.log('Cleanup once');
  });

});

*/

// print matrix any matrix


function printMatrix(rows, cols) {
  let count = 1;

  for (let i = 0; i < rows; i++) {
    let row = [];

    for (let j = 0; j < cols; j++) {
      row.push(count++);
    }

    console.log(row);
  }
}

printMatrix(4, 4);
/*
| Join Type       | Meaning                                 |
| --------------- | --------------------------------------- |
| INNER JOIN      | Only matching records                   |
| LEFT JOIN       | All left table records + matching right |
| RIGHT JOIN      | All right table records + matching left |
| FULL OUTER JOIN | All records from both tables            |

students --table

| id | name | class_id |
| -- | ---- | -------- |
| 1  | Ram  | 101      |
| 2  | Ravi | 102      |
| 3  | Sita | 103      |

Table 2: classes
| class_id | class_name |
| -------- | ---------- |
| 101      | Math       |
| 102      | Science    |
| 104      | English    |

inner join 
SELECT students.name, classes.class_name
FROM students
INNER JOIN classes
ON students.class_id = classes.class_id;

| name | class_name |
| ---- | ---------- |
| Ram  | Math       |
| Ravi | Science    |


left join  LEFT JOIN returns all records from the left table and 
matching records from the right table. If no match, NULL is returned.

SELECT students.name, classes.class_name
FROM students
LEFT JOIN classes
ON students.class_id = classes.class_id;


| name | class_name |
| ---- | ---------- |
| Ram  | Math       |
| Ravi | Science    |
| Sita | NULL       |


*/
// occurnace of each character in given string 


let str=  "hello world iMCseian"
let count = {}
for (let char of str)
{

  count[char]=(count[char]||0)+1
}

console.log(count)


// find duplicate charcters  in given string 

let str= "im duplicate string ok"
let obj ={}

for (let char of str)
{

 obj[char]= (obj[char]||0)+1

}

for (let key in obj)
{
if (obj[key]>1){

  console.log(key)
}


}

// first non reapting string

let str= "swiss"
let obj ={}
for (let char of str)
{

  obj[char]= (obj[char]||0)+1
}

for (let char of str)
{

if (obj[char]===1)
{
console.log(char)

}

}


function longestSubstring(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      if (current.includes(str[j])) {
        break; // stop if duplicate found
      }
      current += str[j];
    }

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

// Test
console.log(longestSubstring("abcabcbb")); // abc



// anagram 

function isAnagram(str1, str2) {
  // remove spaces & convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // sort and compare
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Test
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

---//
//nth highest
function getNthHighest(arr, n) {
  const unique = [...new Set(arr)]; // remove duplicates

  if (n > unique.length) {
    return "Not enough elements";
  }

  return unique.sort((a, b) => b - a)[n - 1];
}

// Example
const arr = [10, 25, 5, 40, 15, 25, 40];

console.log(getNthHighest(arr, 1)); // 40 (highest)
console.log(getNthHighest(arr, 2)); // 25
console.log(getNthHighest(arr, 3)); // 15


//vowels 

function getVowels(str) {
  return str.match(/[aeiou]/gi) || [];
}

const input = "Hello World";
const vowels = getVowels(input);

console.log(vowels); // ['e', 'o', 'o']


// fibonacii
function fibonacciSeries(n) {
  let fib1 = 0, fib2 = 1;

  for (let i = 0; i < n; i++) {
    console.log(fib1);
    let fib = fib1;
    fib1 = fib2;
    fib2 = fib + fib2;
  }
}

console.log(fibonacii(6)); 

// prime 
function checkPrime(n) {
  if (n < 2) {
    console.log("Not Prime");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("Not Prime");
      return;
    }
  }

  console.log("Prime");
}



// compare two arrays 
//1. Compare arrays (same values & same order)

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((value, index) => value === arr2[index]);
}

// Example
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(areArraysEqual(a, b)); // true

//5. Deep compare (for objects inside array)
function deepCompare(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}