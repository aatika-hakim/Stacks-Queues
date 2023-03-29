// Javascript program to Implement a stack using linked list

// A linked list node
class Node
{
	constructor()
	{
		this.data=0;
		this.link=null;
	}
}

// Create Stack Using Linked list
class LinkedlistStack
{
	constructor()
	{
		this.top=null;
	}

    // function to add an element x in the stack
	push(x)
	{
		// create new node temp and allocate memory
		let temp = new Node();

		// check if stack (heap) is full.
		if (temp == null) {
			console.log("Heap Overflow");
			return;
		}

    // initialize data into temp data 
		temp.data = x;

		// put top element into temp link
		temp.link = this.top;

		// update top element
		this.top = temp;
    }

    // function to check if the stack is empty or not
	isEmpty()
	{
		return this.top == null;
	}

    // function to return top element in a stack	
	peek()
	{
		// check for empty stack
		if (!this.isEmpty()) {
			return this.top.data;
		}
		else {
			console.log("Stack is empty");
			return -1;
		}
	}
	
    // function to pop top element from the stack
	pop() // remove at the beginning
	{
		// check for stack underflow
		if (this.top == null) {
			console.log("Stack Underflow");
			return;
		}

		// update the top pointer to point to the next node
		this.top = this.top.link;
	}

    // displaying data and checking underflow
    display()
	{
		// check for stack underflow
		if (this.top == null) {
			console.log("Stack Underflow");
			
		}
		else {
			let temp = this.top;
			while (temp != null) {

				// print node data
				console.log(temp.data);

				// assign temp link to temp
				temp = temp.link;
			}
		}
	}
}

// create list of Implementing class
let list = new LinkedlistStack();
// insert Stack value
list.push(34);
list.push(565);
list.push(0);
list.push("hi");
