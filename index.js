// Write your solution here!
// Define the initial value of the cats array
let cats = ["Milo", "Otis", "Garfield"];

// Prepend a cat to the beginning of the cats array (destructive)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Remove the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Remove the first cat from the cats array (destructive)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Append a cat to the cats array and return a new array without modifying the original array
function appendCat(name) {
    return [...cats, name];
}

// Prepend a cat to the cats array and return a new array without modifying the original array
function prependCat(name) {
    return [name, ...cats];
}

// Remove the last cat from the cats array and return a new array without modifying the original array
function removeLastCat() {
    return cats.slice(0, -1);
}

// Remove the first cat from the cats array and return a new array without modifying the original array
function removeFirstCat() {
    return cats.slice(1);
}

// Export the cats array and the functions
module.exports = { cats, destructivelyPrependCat, destructivelyRemoveLastCat, destructivelyRemoveFirstCat, appendCat, prependCat, removeLastCat, removeFirstCat };
// Function to append a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Export the cats array and the destructivelyAppendCat function
module.exports = { cats, destructivelyAppendCat };