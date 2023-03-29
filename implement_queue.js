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
}