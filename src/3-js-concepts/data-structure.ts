export const dataStructure = 1;

const arr = []
arr.push(1)
arr.push(2)
const top = arr.pop() // 2


const str = "Hello World"
const strArr = str.split(" ") // ["Hello", "World"]


/*
Data Structures :
- Array :
    var fruits: string[] = ["Apple", "Orange", "Banana"];
Array Methods :
    - map() :
        var numbers = [1, 4, 9];
        var roots = numbers.map(Math.sqrt); // [1, 2, 3]
    - filter() :
        var numbers = [1, 4, 9];
        var roots = numbers.filter(num => num > 3); // [4, 9]
    - reduce() :
        var total = [0, 1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6
    - forEach() :
        var numbers = [1, 4, 9];
        numbers.forEach((num) => console.log(num)); // 1 4 9
    - some() :
        var numbers = [1, 4, 9];
        var even = numbers.some(num => num % 2 == 0); // true
    - every() :
        var numbers = [1, 4, 9];
        var even = numbers.every(num => num % 2 == 0); // false
    - indexOf() :
        var fruits = ["Apple", "Orange", "Banana"];
        var a = fruits.indexOf("Apple"); // 0
    - slice() : // to get a subarray
        var fruits = ["Apple", "Orange", "Banana"];
        var citrus = fruits.slice(1); // ["Orange", "Banana"]
    - reverse() :
        var fruits = ["Apple", "Orange", "Banana"];
        fruits.reverse(); // ["Banana", "Orange", "Apple"] 
    - sort() :
        var fruits = ["Apple", "Orange", "Banana"];
        fruits.sort(); // ["Apple", "Banana", "Orange"]
    - sort() with compare function :
        var points = [40, 100, 1, 5, 25, 10];
        points.sort((a, b) => a - b); // [1, 5, 10, 25, 40, 100]
    - push() :
        fruits.push("Mango");
    - pop() :
        fruits.pop();

- Object :
    var person = { name: "John", age: 25 };
Object Methods :
    - Object.keys() :
        var keys = Object.keys(person); // ["name", "age"]
    - Object.values() :
        var values = Object.values(person); // ["John", 25]
    - Object.entries() :
        var entries = Object.entries(person); // [["name", "John"], ["age", 25]]
    - Object.assign() :
        var obj1 = { a: 1, b: 2 };
        var obj2 = { b: 3, c: 4 };
        var obj3 = Object.assign(obj1, obj2); // { a: 1, b: 3, c: 4 }
    - Object.create() :
        var obj = Object.create({ x: 10, y: 20 }); // { x: 10, y: 20 }
    - Object.freeze() :
        Object.freeze(person);
        person.age = 30; // throws an error in strict mode

- Set :
    var fruits = new Set(["Apple", "Orange", "Banana"]);
Set Methods :   
    - add() :
        fruits.add("Mango");
    - delete() :
        fruits.delete("Apple");
    - has() :
        fruits.has("Apple"); // false
    - clear() :
        fruits.clear();

- Map :
    var fruits = new Map([[1, "Apple"], [2, "Orange"], [3, "Banana"]]);
Map Methods :
    - set() :
        fruits.set(4, "Mango");
    - delete() :
        fruits.delete(1);
    - has() :
        fruits.has(1); // false
    - clear() :
        fruits.clear();

- String :
    var str = "Hello World";
String Methods :
    - charAt() :
        var char = str.charAt(0); // "H"
    - charCodeAt() :
        var charCode = str.charCodeAt(0); // 72
    - concat() :
        var newStr = str.concat("!!!"); // "Hello World!!!"
    - indexOf() :
        var index = str.indexOf("World"); // 6
    - lastIndexOf() :
        var index = str.lastIndexOf("l"); // 9
    - match() :
        var matches = str.match(/o/g); // ["o", "o"]
    - replace() :
        var newStr = str.replace("World", "John"); // "Hello John"
    - search() :
        var index = str.search("World"); // 6
    - slice() :
        var newStr = str.slice(6); // "World"
    - split() :
        var arr = str.split(" "); // ["Hello", "World"]
    - substr() : // (start, length)
        var newStr = str.substr(6, 5); // "World"
    - substring() : // (start, end)
        var newStr = str.substring(6, 11); // "World"
    - toLowerCase() :
        var newStr = str.toLowerCase(); // "hello world"
    - toUpperCase() :
        var newStr = str.toUpperCase(); // "HELLO WORLD"


    **** TO REVERSE A STRING ****
        var reversedStr = str.split("").reverse().join(""); // "dlroW olleH"
*/
