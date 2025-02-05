export const jts = 1;

/*
Basics of JavaScript/Typescript/ES6:
- Variables (var, let, const)
- Operators (arithmetic, assignment, comparison, logical, bitwise, string, conditional)
- 
- Functions (function declaration, function expression, arrow function)
- interfaces :
    interface Person {
        name: string;
        age: number;
    }
- enums :
    enum Color {
        Red,
        Green,
        Blue,
    }
- classes :
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
- inheritance :
    class Employee extends Person {
        empCode: number;
        constructor(name: string, age: number, code: number) {
            super(name, age);
            this.empCode = code;
        }
    }
- modules :
    export const PI = 3.14;
    export function add(a: number, b: number) {
        return a + b;
    }
    import { PI, add } from './math';

- Hoisting :
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5

- Closures :
    function outer() {
        var name = 'John';
        function inner() {
            console.log(name);
        }
        return inner;
    }
    var fn = outer();
    fn(); // John

-Hoisting and Closures work because of the lexical scoping of JavaScript.
Javascript first does the memory creation and then goes to code execution.

-var, let, const and hoisting:
    var x = 5;
    console.log(x); // 5
    var x = 10;
    console.log(x); // 10

    let x = 5;
    console.log(x); // 5
    let x = 10; // SyntaxError: Identifier 'x' has already been declared

    const x = 5;
    console.log(x); // 5
    const x = 10; // SyntaxError: Identifier 'x' has already been declared

- Generators :
    yield : 
    function* infiniteSequence() {
        var i = 0;
        while(true) {
            yield i++;
        }
    }
    var iterator = infiniteSequence();
    console.log(iterator.next()); // { value: 0, done: false }
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    ...

- Destructuring :
    var [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2

- Spread Operator :
    var params = [ "hello", true, 7 ];
    var other = [ 1, 2, ...params ]; // [ 1, 2, "hello", true, 7 ]

- Rest Parameters :
    function multiply(multiplier, ...theArgs) {
        return theArgs.map(x => multiplier * x);
    }
    var arr = multiply(2, 1, 2, 3); // [2, 4, 6]

- Template Literals :
    var a = 5;
    var b = 10;
    console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

- Tagged Templates :
    function tag(strings, ...values) {
        console.log(strings); // ["Hello ", "", raw: Array(2)]
        console.log(values); // ["world"]
        return "Bazinga!";
    }
    tag`Hello ${world}!`;


setTimeout : // Executes a function, once, after waiting a specified number of milliseconds
    setTimeout(() => {
        console.log('Hello');
    }, 1000);
clearTimeout : // The clearTimeout() method clears a timer set with the setTimeout() method.
    clearTimeout(timeoutId);

using setTimout in real-time :
    var timeoutId = setTimeout(() => {
        console.log('Hello'); // This will execute after 1 second
    }, 1000);
    clearTimeout(timeoutId);
    // clearTimeout will cancel the execution of the setTimeout function.


setInterval : // Executes a function, over and over again, at specified time intervals
    setInterval(() => {
        console.log('Hello');
    }, 1000);

clearInterval : // The clearInterval() method clears a timer set with the setInterval() method.
    clearInterval(intervalId);

- localStorage :
    localStorage.setItem('name', 'John');
    localStorage.getItem('name');
    localStorage.removeItem('name');
    localStorage.clear();

- sessionStorage :
    sessionStorage.setItem('name', 'John');
    sessionStorage.getItem('name');
    sessionStorage.removeItem('name');
    sessionStorage.clear();

- Cookies :
    document.cookie = "name=John";
    var x = document.cookie;

- Fetch API :
    fetch('https://api.com/values')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

- XMLHttpRequest :
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.com/values', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();

- WebSockets :
    var socket = new WebSocket('ws://localhost:8080');
    socket.onopen = function() {
        socket.send('Hello Server!');
    };
    socket.onmessage = function(event) {
        console.log('Message from server ', event.data);
    };
    socket.onclose = function() {
        console.log('Connection closed');
    };

- window object :
    window.location.href;
    window.open('https://www.google.com');
    window.close();
    window.addEventListener('resize', () => {
        console.log('Window resized');
    });
    window.removeEventListener('resize', () => {
        console.log('Window resized');
    }
    window.innerWidth;
    window.innerHeight;
    window.scrollX;
    window.scrollY;
    window.alert('Hello');
    window.confirm('Are you sure?');
    window.prompt('Enter your name');


- document object :
    document.getElementById('myId');
    document.getElementsByClassName('myClass');
    document.getElementsByTagName('p');
    document.querySelector('.myClass');
    document.querySelectorAll('.myClass');
    document.createElement('div');

- event object :
    event.preventDefault();
    event.stopPropagation();
    event.target;
    event.currentTarget;
    event.type;

- event listeners :
    document.getElementById('myButton').addEventListener('click', () => {
        console.log('Button clicked');
    });
    document.getElementById('myButton').removeEventListener('click', () => {
        console.log('Button clicked');
    });

- event bubbling :
    document.getElementById('myButton').addEventListener('click', () => {
        console.log('Button clicked');
    });
    document.getElementById('myDiv').addEventListener('click', () => {
        console.log('Div clicked');
    });
    // If you click on the button, both 'Button clicked' and 'Div clicked' will be logged.
*/
