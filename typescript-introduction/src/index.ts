//
// Primitive Types
//
console.log("*** PRIMITIVE TYPES ***")
let awesome = "Its going to be awesome!";
let value: number = 1
let isCool: boolean = true
awesome = awesome.toLowerCase()
document.getElementsByTagName("p")[0].innerText = awesome;

//
// Functions
//
console.log("*** FUNCTION ***")
function sum(a: number, b: number) {
  return a + b
}
let result = sum(3, 4)
console.log(result)

//
// Functions with return types and optional parameters
//
console.log("*** FUNCTION WITH RETURN TYPES AND OPTIONAL PARAMETERS ***")
function applyDiscount(price: number, discountPercentage: number = 50, giveToCharity?: boolean): number {
  let newPrice = price * (100 - discountPercentage) / 100
  if (giveToCharity) {
    newPrice--;
  }
  return newPrice;
}
let finalPrice = applyDiscount(300)
console.log(finalPrice)

//
// Objects
//
console.log("*** OBJECTS ***");
function printCoords(coords: { lat: string, lng: string }) {
  console.log("lat=", coords.lat, ", lng=", coords.lng);
}
printCoords({lat: "10", lng: "20"})

const user = { firstName: "Jow", lastName: "Shab"}
const userOneName = { firstName: "Ronald" }
function displayUser(user: {firstName: string, lastName?: string}) {
  let ln = user.lastName?.toLowerCase()
  console.log("First=", user.firstName, ", Last=", ln)
}
displayUser(user)
displayUser(userOneName)

//
// Arrays and Lambda/Map
//
console.log("*** ARRAYS AND LAMBDA/MAP ***");
const persons: {name: string, job: string, age: number }[] = [
  { name: "Alice", job: "Front", age: 28},
  { name: "Bob", job: "Back", age: 44},
  { name: "Cody", job: "Full", age: 30 },
];

const formattedList: string[] = persons.map((person: {name: string, job: string, age: number }): string=>{
  return `<li>Name: ${person.name}, Job: ${person.job}, Age: ${person.age}</li>`
})
console.log(formattedList)
const liListString: string = "<ul>" + formattedList.join("") + "</ul>"
console.log(liListString)
document.getElementById("app")!.innerHTML = liListString

//
// Interfaces
//
console.log("*** INTERFACES ***");
interface Person {
  name: string
  job: string
  age: number
  isHappy?: boolean
  friendList?: Person[]
  sayHi?: (color: string) => void
}
const ipersons: Person[] = [
  { name: "Alice", job: "Front", age: 28, isHappy: true, sayHi: (color) => { console.log(`I am Alice! I like ${color}.`)}},
  { name: "Bob", job: "Back", age: 44},
  { name: "Cody", job: "Full", age: 30 },
];

const iformattedList: string[] = persons.map((person: Person): string=>{
  return `<li>Name: ${person.name}, Job: ${person.job}, Age: ${person.age}</li>`
})
ipersons[0].sayHi?.("red") // optional call syntax
console.log(iformattedList)
const iliListString: string = "<ul>" + formattedList.join("") + "</ul>"
console.log(iliListString)
document.getElementById("app2")!.innerHTML = iliListString

//
// Classes
//
console.log("*** CLASSES ***")
class Vehicle {

  static category: string = "Vehicle"

  speed: number

  // readonly = cannot change
  // private = cannot access outside
  // public = can access outside
  // static = class variable
  private brand: string  

  constructor(speed: number, brand: string) {
    this.speed = speed
    this.brand = brand
  }

  public setBrand(brand: string): void {
    this.brand = brand[0].toUpperCase() + brand.slice(1, brand.length).toLowerCase()
  }

  getBrand(): string {
    return this.brand
  }
}

const honda = new Vehicle(200, "honda")
console.log(honda.getBrand())

honda.setBrand ("tesla")
console.log(honda.getBrand())

console.log(Vehicle.category)


//
// Tuples
//
console.log("*** TUPLES ***")
const rgb_array: [number, string, number] = [255, "2", 133]
rgb_array.push("foo")
console.log(rgb_array)

const rgb_ro: readonly [number, string, number] = [255, "2", 133]
console.log(rgb_ro)

