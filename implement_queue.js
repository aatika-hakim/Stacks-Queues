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
}