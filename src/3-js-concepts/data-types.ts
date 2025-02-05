export const dataTypes = 1;

/*
- string :
    var name: string = "John";
- number :
    var age: number = 25;
- boolean :
    var isUpdated: boolean = true;
- array :
    var list: number[] = [1, 2, 3];
- tuple :
    var x: [string, number];
    x = ["hello", 10]; // OK
    x = [10, "hello"]; // Error
- enum :
    enum Color {Red, Green, Blue}
    var c: Color = Color.Green;
- any :
    var notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
- void :
    function warnUser(): void {
        console.log("This is my warning message");
    }
- null and undefined :
    var u: undefined = undefined;
    var n: null = null;
- never : 
    function error(message: string): never {
        throw new Error(message);
    }
- object :
    declare function create(o: object | null): void;
    create({ prop: 0 }); // OK
    create(null); // OK
- type assertions :
    var someValue: any = "this is a string";
    var strLength: number = (someValue as string).length;
    or 
    var someValue: any = "this is a string";
    var strLength: number = (<string>someValue).length;
*/