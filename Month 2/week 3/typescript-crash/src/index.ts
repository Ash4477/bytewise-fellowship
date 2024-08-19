// Basic Types
let id: number = 5;
let company: string = 'XYZ';
let isPublished: boolean = true;
let x:any = 'Hello';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'yeah'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Ash'],
    [2, 'Jill']
]

// Union
let pid: string | number;
pid = 22;
pid = "hey";

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'Ash'
// };

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Ash'
}

// Type Assertion

let cid: any;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Ash'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
    id: number;
    name: string;
    register(): void;
}

class Person implements PersonInterface {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): void {
        console.log(`${this.name} is registered`);
    }
}

const brad = new Person(0, 'brad');

// Subclasses

class Employee extends Person {
    position: string;

    constructor(id:number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 'Developer');
emp.register();

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['chris', 'leon', 'ada']);