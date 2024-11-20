var _a, _b;
//
// Primitive Types
//
console.log("*** PRIMITIVE TYPES ***");
var awesome = "Its going to be awesome!";
var value = 1;
var isCool = true;
awesome = awesome.toLowerCase();
document.getElementsByTagName("p")[0].innerText = awesome;
//
// Functions
//
console.log("*** FUNCTION ***");
function sum(a, b) {
    return a + b;
}
var result = sum(3, 4);
console.log(result);
//
// Functions with return types and optional parameters
//
console.log("*** FUNCTION WITH RETURN TYPES AND OPTIONAL PARAMETERS ***");
function applyDiscount(price, discountPercentage, giveToCharity) {
    if (discountPercentage === void 0) { discountPercentage = 50; }
    var newPrice = price * (100 - discountPercentage) / 100;
    if (giveToCharity) {
        newPrice--;
    }
    return newPrice;
}
var finalPrice = applyDiscount(300);
console.log(finalPrice);
//
// Objects
//
console.log("*** OBJECTS ***");
function printCoords(coords) {
    console.log("lat=", coords.lat, ", lng=", coords.lng);
}
printCoords({ lat: "10", lng: "20" });
var user = { firstName: "Jow", lastName: "Shab" };
var userOneName = { firstName: "Ronald" };
function displayUser(user) {
    var _a;
    var ln = (_a = user.lastName) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    console.log("First=", user.firstName, ", Last=", ln);
}
displayUser(user);
displayUser(userOneName);
//
// Arrays and Lambda/Map
//
console.log("*** ARRAYS AND LAMBDA/MAP ***");
var persons = [
    { name: "Alice", job: "Front", age: 28 },
    { name: "Bob", job: "Back", age: 44 },
    { name: "Cody", job: "Full", age: 30 },
];
var formattedList = persons.map(function (person) {
    return "<li>Name: ".concat(person.name, ", Job: ").concat(person.job, ", Age: ").concat(person.age, "</li>");
});
console.log(formattedList);
var liListString = "<ul>" + formattedList.join("") + "</ul>";
console.log(liListString);
document.getElementById("app").innerHTML = liListString;
//
// Interfaces
//
console.log("*** INTERFACES ***");
var ipersons = [
    { name: "Alice", job: "Front", age: 28, isHappy: true, sayHi: function (color) { console.log("I am Alice! I like ".concat(color, ".")); } },
    { name: "Bob", job: "Back", age: 44 },
    { name: "Cody", job: "Full", age: 30 },
];
var iformattedList = persons.map(function (person) {
    return "<li>Name: ".concat(person.name, ", Job: ").concat(person.job, ", Age: ").concat(person.age, "</li>");
});
(_b = (_a = ipersons[0]).sayHi) === null || _b === void 0 ? void 0 : _b.call(_a, "red"); // optional call syntax
console.log(iformattedList);
var iliListString = "<ul>" + formattedList.join("") + "</ul>";
console.log(iliListString);
document.getElementById("app2").innerHTML = iliListString;
//
// Classes
//
console.log("*** CLASSES ***");
var Vehicle = /** @class */ (function () {
    function Vehicle(speed, brand) {
        this.speed = speed;
        this.brand = brand;
    }
    Vehicle.prototype.setBrand = function (brand) {
        this.brand = brand[0].toUpperCase() + brand.slice(1, brand.length).toLowerCase();
    };
    Vehicle.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicle.category = "Vehicle";
    return Vehicle;
}());
var honda = new Vehicle(200, "honda");
console.log(honda.getBrand());
honda.setBrand("tesla");
console.log(honda.getBrand());
console.log(Vehicle.category);
//
// Tuples
//
console.log("*** TUPLES ***");
var rgb_array = [255, "2", 133];
rgb_array.push("foo");
console.log(rgb_array);
var rgb_ro = [255, "2", 133];
console.log(rgb_ro);
