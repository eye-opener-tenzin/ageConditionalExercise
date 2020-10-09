var age = prompt("How old are you?")
if (age < 0) {
    console.log("You have enter a wrong age")
} else if (age == 21) {
    console.log("Happy 21st birthday")
} else if (age % 2 !== 0) {
    console.log("Your age is odd!")
} if (age % Math.sqrt(age) === 0) {
    console.log("Perfect square")
}