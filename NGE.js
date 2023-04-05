// A Stack based Javascript program to find next greater element for all array elements.

/* print the element and NGE pair for all array elements of length n */


function getNGE(arr, n) {     // NGE means nearest greater element
    var stack = [];

     // push first element in stack
    stack.push(arr[0]);

    for(var i=1; i<n; i++){
        if(stack.length == 0){
            stack.push(arr[i])
            continue;
        }

    /* if stack is not empty, then pop an element from stack.If the popped element is smaller than next, then
        print the pair,
 		if elements are smaller and stack is not empty then pop elements */

        while(stack.length == 0 == false && stack[stack.length - 1] < arr[i]){
            console.log(stack[stack.length - 1] + " > " + arr[i]);
            stack.pop();
        }
        /* push next to stack to find next greater element for it */
            stack.push(arr[i]);
}

       	/* If stack do not have the next greater element for rest elements, so print -1 for them */
            while(stack.length != 0){
                console.log(stack[stack.length - 1] + " > " + -1)
                stack.pop();
            }
}

let arr = [2,4,5,4,7,6];
let n = arr.length;
getNGE(arr,n);