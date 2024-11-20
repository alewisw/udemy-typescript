//
// Unions
//
console.log("*** UNION TYPES ***")
let value : number | string | boolean | []
value = []
interface Square {
  kind: "square"
  size: number
}
interface Circle {
  kind: "circle"
  radius: number
}
let myShape: Square | Circle
function displayShape(shape: Square|Circle): void
{
  console.log(`Kind = ${shape.kind}`)

  if (shape.kind === "circle") {
    console.log(`Radius = ${shape.radius}`)
  }
  if (shape.kind === "square") {
    console.log(`Size = ${shape.size}`)
  }
}
myShape = {
  kind: "square",
  size: 4
}
console.log(myShape)
displayShape(myShape)
myShape = {
  kind: "circle",
  radius: 54
}
console.log(myShape)
displayShape(myShape)
let array: (number|string|(Square|Circle)) [] = [1, "Hi", myShape]
console.log(array)

//
// 'is' operator
//
console.log("*** 'IS' OPERATOR ***")
interface Fish {
  swim: () => void
}
interface Bird {
  fly: () => void
  walk: () => void
}

function getRandomPet(): Fish | Bird {
  if (Math.random() > 0.5) {
    return {swim: () => console.log("Swimming")}
  }
  else
  {
    return {fly: () => console.log("Fly"), walk: () => console.log("Walk")}
  }
}

function isFish(pet : Fish | Bird): pet is Fish {
  return "swim" in pet
}

const pet = getRandomPet()
if (isFish(pet)) {
  console.log("it's a fish!")
  pet.swim()
} else {
  console.log("it's not a fish!")
  pet.fly()
  pet.walk()
}


//
// Enumerations
//
console.log("*** ENUMERATIONS ***")
enum Direction {
  North,
  South = "STH",
  East = 8,
  West
}

const direction: Direction = Direction.North

function move(direction: Direction) {
  switch (direction)
  {
    case Direction.North: console.log(`N ${direction}`); break;
    case Direction.South: console.log(`S ${direction}`); break;
    case Direction.East: console.log("E"); break
    case Direction.West:console.log("W"); break;
  }
}
move(Direction.West)
move(Direction.South)
move(8)
move(Direction.North)



//
// Types
//
console.log("*** TYPES ***")

interface VehicleInterface {
  maxSpeed: number
  brand: string
}

type VehicleType = {
  maxSpeed: number
  brand: string
}

let v1 : VehicleInterface
let v2 : VehicleType

v1 = {
  brand: "Honda",
  maxSpeed: 200
}
v2 = {
  brand: "Toyota",
  maxSpeed: 210
}
console.log(v1)
console.log(v2)

// The below only works with interfaces, but not with types.
interface Movie {
  title: string
  year: number
}
interface Movie {
  director: string
}

let m1: Movie
m1 = {
  title: "bar",
  year: 2023,
  director: "foo"
}
console.log(m1)

// Extends for interfaces
interface Car extends VehicleInterface {
  horsePower: number
}
interface Boat extends VehicleInterface {
  sails: number
}

let car : Car
car = {
  brand: "Toyota",
  maxSpeed: 200,
  horsePower: 100
}

let boat : Boat
boat = {
  brand: "Honda",
  maxSpeed: 30,
  sails: 3
}

// Ampersands for types
type CarType = {
  horsePower: number
} & VehicleType

type BoatType = {
  sails: number
} & VehicleInterface

let carType : CarType
carType = {
  brand: "Toyota",
  maxSpeed: 200,
  horsePower: 100
}

let boatType : BoatType
boatType = {
  brand: "Honda",
  maxSpeed: 30,
  sails: 3
}

console.log(car)
console.log(boat)
console.log(carType)
console.log(boatType)


//
// Accessors
//
console.log("*** ACCESSORS ***")
class Circle2 {
  private _radius: number;

  constructor (r: number) {
    this._radius = r;
  }

  set rads(r: number) {
    if (r > 0) {
      this._radius = r;
    } else {
      throw new Error('Cannot set non-positive radius.')
    }
  }

  get rads(): number {
    return this._radius
  }

}

const circle = new Circle2(5)
console.log(`initial = ${circle.rads}`)
circle.rads = 7
console.log(`final = ${circle.rads}`)


//
// Protected
//
console.log("*** PROTECTED ***")
class User {
  protected _name: string
  constructor(name: string) {
    this._name = name
  }
  get name(): string {
     return this._name 
    
    }
}

class Admin extends User {
  set name2(n: string) { // MUST have different name!
    this._name = n
  }
}
const user: Admin = new Admin("Terramy")
console.log(user.name)
user.name2 = "Joh"
console.log(user.name)



//
// Implements
//
console.log("*** IMPLEMENTS ***")
interface Printable {
  print: () => void;
}

interface Exportable {
  export: () => void;
}

class Book implements Printable {
  private _title: string;
  private _author: string;

  constructor(title: string, author: string) {
    this._title = title;
    this._author = author;
  }
  print() {
    console.log(
      "Title " + this._title,
      " Author ",
      this._author
    );
  }
}

class Magazine implements Printable {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  print() {
    console.log("Name " + this._name);
  }
}

class PDF implements Printable, Exportable {
  private _name: string;
  private size: string;
  constructor(name: string, size: string = "A4") {
    this._name = name;
    this.size = size
  }

  print() {
    console.log("Name " + this._name, " Size ", this.size);
  }

  export() {
    console.log("exporting....");
  }
}

const book = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald"
);
const magazine = new Magazine("Time Magazine");
const pdf = new PDF("The Paper")
book.print()
magazine.print()
pdf.print()
pdf.export()




//
// Abstract Classes
//
console.log("*** ABSTRACT CLASSES ***")
abstract class VideoGame {
  protected name: string
  protected genre: string
  protected platform: string

  constructor(name: string, genre: string, platform: string) {
    this.name = name
    this.genre = genre
    this.platform = platform
  }

  showInfo(): void
  {
    console.log(`${this.name}, ${this.genre}, ${this.platform}`)
  }

  abstract play(): void
}

class ArcadeGame extends VideoGame {

  constructor(name: string, platform: string) {
    super(name, "Arcade", platform)
  }

  play(): void {
    console.log(`playing arcade game ${this.name}`)
  }
  
}

class ShooterGame extends VideoGame {

  constructor(name: string, platform: string) {
    super(name, "Shooter", platform)
  }

  play(): void {
    console.log(`playing shooter game ${this.name}`)
  }
  
}

const mario = new ArcadeGame("Mario", "Gameboy")
const cod = new ShooterGame("Call of Duty", "PC")
mario.showInfo()
mario.play()
cod.showInfo()
cod.play()




//
// Generics
//
console.log("*** GENERICS ***")
const nums = [1,2,3]
const strs = ["hello", "foo", "bar"]
const bools = [true, false, true]
interface Hero {
  name: string
  power: string
}
const h1 = {name: 'Hulk', power: 'Gamma'}
const h2 = {name: 'Flash', power: 'Speed'}
const h3 = {name: 'Superman', power: 'Strong'}
const h4 = {name: 'Galactus', power: 'Destruction'}
const heros = [ h1, h2, h3, h4 ]

function removeLastElement<T>(array: T[]): T[] {
  return array.slice(0, array.length-1)
}

console.log(nums)
console.log(removeLastElement(nums))
console.log(strs)
console.log(removeLastElement(strs))
console.log(bools)
console.log(removeLastElement(bools))
console.log(heros)
console.log(removeLastElement(heros))




//
// Generic Classes
//
console.log("*** GENERIC CLASSES ***")
class SmartArray<T> {
  private array: T[]

  constructor(array: T[]) {
    this.array = array;
  }
  
  get values(): T[] {
    return this.array;
  }

  shuffle(): T[] {
    return this.array.sort(() => Math.random() > 0.5 ? -1 : 1)
  }
  
  push(item: T): void {
    this.array.push(item)

  }
  
  removeLast(): void {
    this.array.pop()
  }
}

const heroSmartArray = new SmartArray([h1, h2, h3, h4])
console.log(heroSmartArray.values)
heroSmartArray.shuffle()
console.log(heroSmartArray.values)

