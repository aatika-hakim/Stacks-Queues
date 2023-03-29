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
    }
}