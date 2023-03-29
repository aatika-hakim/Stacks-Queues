// Implement a queue using an array

class Queue{
    constructor(c)
    {
        this.front = this.next = 0; //next point to next block of end ele
        this.capacity = c;
        this.queue = new Array(this.capacity);
    }

    
// Function to insert an element at the next of the queue
queueEnqueue(data)
{
	// Check queue is full or not
	if (this.capacity == this.next)
	{
		console.log("Queue is full");
		return;
	}

	// insert element at the next
	else
	{
		this.queue[this.next] = data;
		this.next++;
	}
	return;
}

// Function to delete an element from the front of the queue
queueDequeue()
{
	
	// If queue is empty
	if (this.front == this.next)
	{
		console.log("Queue is empty");
		return;
	}

    
    //Shift all the elements from index 2 till
    // next to the right by one
	else
	{
		for(let i = 0; i < this.next - 1; i++)
		{
			this.queue[i] = this.queue[i + 1];
		}
        // Store 0 at next if there is no element
		if (this.next < this.capacity)
        this.queue[this.next] = 0;

    // Decrement next
    this.next--;
}
return;
}

// Print queue elements
queueDisplay()
{
	let i;
	if (this.front == this.next)
	{
		console.log("Queue is Empty");
		return;
	}

	// Traverse front to next and print elements
	for(i = this.front; i < this.next; i++)
	{
		console.log(this.queue[i] + " <-- ");
	}
	return;
}

    // Print front of queue
    queueFront(){
	if (this.front == this.next)
	{
		console.log("Queue is Empty");
		return;
	}
	console.log("Front Element is: "+this.queue[this.front]);
	return;
}
}

// Create a queue of capacity 4
let q = new Queue(4);

// Print Queue elements
q.queueDisplay();

// Inserting elements in the queue
q.queueEnqueue(20);
q.queueEnqueue(30);
q.queueEnqueue(40);
q.queueEnqueue(50);

//Again Print Queue elements
q.queueDisplay();

// Insert element in the queue
q.queueEnqueue(60);

// Print Queue elements
q.queueDisplay();

q.queueDequeue();
q.queueDequeue();
console.log(" after two node deletion ");

// Print Queue elements
q.queueDisplay();

// Print front of the queue
q.queueFront();


