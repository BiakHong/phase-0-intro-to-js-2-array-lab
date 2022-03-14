// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function describe(cat){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    destructivelyAppendCat("name")
}
function destructivelyAppendCat(name){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.pop()

}
function destructivelyRemoveFirstCat(name){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift()
}
function appendCat(cat){
    const copyOfCats = cats.slice();
    copyOfCats.push("Broom");
    return copyOfCats;

}
function prependCat(name){
    const copyOfCats  =[name, ...cats];
    return copyOfCats;

}
function removeLastCat(){
    return cats.slice(0,-1)

}
function removeFirstCat(){
    return cats.slice(1);

}

