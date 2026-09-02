function* increment(start) {
    let count = start;
    while (true) {
        yield ++count;
    }
}

function* decrement(start) {
    let count = start;

    while (true) {
        yield --count;
    }
}

let inc = increment(52);
let dec = decrement(52);

console.log(inc.next().value); 
console.log(inc.next().value); 

console.log(dec.next().value); 
console.log(dec.next().value); 