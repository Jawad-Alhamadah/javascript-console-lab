 
// Pre answers 

let yellow ="\x1b[33m";
let reset = "\x1b[0m"
let green = "\x1b[32m"

 
//Question one-- Area of a rectangle

let rectWidth = 15 
let rectHeight = 25;
let area = rectHeight * rectWidth
console.log ( `The area of the rectangle is: ${yellow}${area} \n`)

//Question one-- Area of a rectangle                 -----------end


//Question Two-- Temprature

let tempInC = 30;
let tempInF = ( ( tempInC *( 9.0/5.0 ) ) +32)

console.log(`${yellow} ${tempInC}°C${reset}is  ${yellow}${tempInF}°F${reset}`)

tempInC = (tempInF - 32) * (5.0/9.0)
console.log( ` ${yellow}${tempInF}°F${reset}is  ${yellow}${tempInC}°C${reset}\n`)

//Question Two-- Temprature               -----------end




//Question Three - hours to seconds


let hours = 2.0
let seconds = (hours * 60.0) * 60.0
console.log(`${yellow}${hours}${reset}Hours =${yellow}${seconds}${reset}Seconds\n`)

//Question Three - hours to seconds  -----------end



//Question 4 -- Join two strings

let thingOne = "thingOne";
let thingTwo = "thingTwo";

console.log(thingOne.concat(thingTwo) +"\n");

//Question 4 -- Join two strings -----------end

//Question 5 - Total Bill

let bill = 10.25 + 3.99 + 7.15
let tip = bill* 0.15

let total = tip + bill

console.log(`the total of the bill ${yellow}(${bill})${reset} with tip ${yellow}(${tip})${reset}is: ${total}${reset}\n `)


//Question 5 - Total Bill

//Question 6 -- MadLibs       
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

let madLib = `The Intro to JavaScript course is ${green}${adjective1}${reset}. James and Julia are so ${green}${adjective2}${reset}. I cannot wait to work through the rest of this ${green}${adjective3}${reset} content! \n`

console.log(madLib)

//Question 6 -- MadLibs   ----end

//Question 7 -- Awesome Message

let firstName = "Jawad"
let interest = " Robotics"
let hobby = "Paint"
let awesomeMessage = `Hi, my name is ${green}${firstName}${reset}. I love${green}${interest}${reset}. In my spare time, I like to ${green}${hobby}${reset}.`

console.log(awesomeMessage)

