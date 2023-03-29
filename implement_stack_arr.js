// Implement a stack using an array as the underlying container.

// The Stack class should support the following methods:

// int size()
// isEmpty()
// int top()
// push(int element)
// pop()

let stack = [];
//  push method
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]

// size method

let s = stack.length;
console.log(s);


// isEmpty method
function isEmpty(){
    if(stack.length === 0){
        console.log("stack is empty.")
    } else if(stack.length > 0){
        console.log("stack is full.")
    } else{
        console.log("stack")
    }  
}

// calling isEmpty function
console.log(isEmpty());

//Top method

function peek() {
    var t = stack.length - 1;
    console.log(t)
}
console.log(peek());


// pop method
console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

console.log(stack.pop()); //  2
console.log(stack); // [1];

console.log(stack.pop()); //  1
console.log(stack); // []; empty

console.log(stack.pop()); //  undefined



