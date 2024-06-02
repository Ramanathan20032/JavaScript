factor = "dhanush";
fplayer = "dhoni";
fmovie = "asuran";

print();

function print() {
  console.log("Favorite Actor : " + factor);
  console.log("Favorite Player : " + fplayer);
  console.log("Favorite Movie : " + fmovie);
}

function add(a, b) {
  console.log(a + b);
}
add(5, 8);

function area(length, breath) {
  console.log("Area : " + length * breath);
}
area(7, 5);

function myName() {
  return "Ramanathan";
}
console.log(myName());

function add(a, b) {
  return a + b;
}
console.log(add(6, 9));

rain = true;
console.log(typeof rain);

if (rain) {
  console.log("Its raining");
} else {
  console.log("Its not raining");
}

color = "yellow";
if (color == "red") {
  console.log("Stop");
} else if (color == "green") {
  console.log("Go");
} else if (color == "yellow") {
  console.log("Get Ready");
} else {
  console.log();
}

score = 71;
if (score <= 50) {
  console.log("you need to improve");
} else if (score > 50 && score <= 70) {
  console.log("Good job");
} else {
  console.log("Excellent performance");
}

number = 4;
function oddOrEven() {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven());

word = "waste";
for (i = 1; i <= 5; i++) {
  console.log(word);
}

for(i = 10 ; i > 0 ; i--){
    console.log(i)
}

number = 2
for(i = 1 ; i <= 10 ; i++){
    console.log(i + " x " + number + " = " + i * number)
}

let person = {
  name: "Ramanthan",
  rollNo: 204053
}

console.log(person)
console.log(person.name)
console.log(person.rollNo)


let selectedColors = ['Red','Blue','Green','Yellow']
selectedColors[4] = 'Orange'
selectedColors[5] = 5

console.log(selectedColors)
console.log(selectedColors[0])

console.log(typeof(selectedColors))
console.log(selectedColors.length)


function greet(name, rollNo){
  console.log('Hello ' + name + ' ' + rollNo)
}
greet('Ram', 204053)
greet('dhoni')

function square(num){
  return num * num;
}

console.log(square(5))