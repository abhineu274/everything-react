/*
- Handling Promises in JavaScript can be done using .then() and .catch() methods or async/await syntax.

1. .then() example:
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
2. async/await example:
    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();



- == vs === in JavaScript:
1. == is used for comparison and === is used for strict comparison.
2. == will convert the variable values to the same type before comparing.
3. === will not convert the variable values to the same type before comparing.
4. == is called as equality operator and === is called as identity operator.
5. == will return true if the variable values are equal.
6. === will return true if the variable values are equal and the variable types are equal.
7. == will return true for '1' == 1.
8. === will return false for '1' === 1.
9. == will return true for true == 1.
10. === will return false for true === 1.


- Interesting Javascript results:
1. 0.1 + 0.2 === 0.3; // false
    Reason: 0.1 + 0.2 = 0.30000000000000004
2. [] == 0; // true
    Reason: [] is converted to 0.
3. [] == []; // false
    Reason: Both are different objects in memory.
4. {} == {}; // false
    Reason: Both are different objects in memory.
5. [] == {}; // false
    Reason: Both are different objects in memory.
6. {} == 0; // false
    Reason: {} is converted to 0.

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == 0); // false
console.log(null === 0); // false


console.log('5' - 3); // 2 - string is converted to number as one of the operands is a number and - is not a string operator
console.log('5' + 3); // 53 - string concatenation as one of the operands is a string
console.log('5' + - '3'); // '53' - string concatenation as one of the operands is a string
console.log('5' - '3'); // 2 - string is converted to number as both operands are numbers and - is not a string operator
console.log('foo' + + 'bar'); // 'fooNaN' - + 'bar' is NaN

typeof NaN; // number
typeof null; // object
typeof undefined; // undefined
typeof []; // object
typeof {}; // object
typeof ''; // string
typeof 1; // number









****************************CLONING - DEEP VS SHALLOW****************************










******************************CURRING **********************************************
FUN()() -> FUN(FUN2())







******************************ARROW FUNCTION VS NORMAL FUNCTION******************************














**********************************this KEYWORD**********************************












*****************************OBJECT********************************************
const obj = {
    key: 'value',
    key2: 'value2',
    method: function() {
        console.log(this.key);
    }
};

Object.keys(obj); // ['key', 'key2', 'method']
Object.values(obj); // ['value', 'value2', function() {...}]
Object.entries(obj); // [['key', 'value'], ['key2', 'value2'], ['method', function() {...}]]

Object.assign({}, obj); // shallow copy of obj
const newObj = {...obj}; // shallow copy of obj

Object.freeze(obj); // makes the object immutable

JSON.stringify(obj); // converts object to JSON string
JSON.parse(JSON.stringify(obj)); // deep copy of obj

for (let key in obj) {
    console.log(key, obj[key]); // key value
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value); // key value
    if (typeof value === 'function') {
        value.call(obj); // to call the method with the correct this context
    }
}



-call(), apply(), bind() methods:
1. call() - calls a function with a given this value and arguments provided individually.
2. apply() - calls a function with a given this value and arguments provided as an array.
3. bind() - returns a new function, that when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.




*/
