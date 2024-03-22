// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
   return cats.push("Ralph")
}

// destructivelyAppendCat("Ralph")
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function  destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    const copyOfCats = [...cats,"Broom"]
     console.log(cats)
     return copyOfCats
}
function prependCat(name) {
    const copyOfCats = ["Arnold",...cats]
     console.log(cats)
     return copyOfCats
}
function  removeLastCat() {
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1)
}
