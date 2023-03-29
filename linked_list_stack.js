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
}