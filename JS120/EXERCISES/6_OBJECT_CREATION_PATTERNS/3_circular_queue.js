class CircularQueue {
  constructor(buffer) {
    this.buffer = [];
    for (let count = 0; count < buffer; count += 1) {
      this.buffer.push(null);
    }
  }

  enqueue(data) {
    if (this.buffer.some(el => el === null)) {
      let nullIndex = this.buffer.indexOf(null);
      this.buffer[nullIndex] = data;
    } else {
      this.buffer[0] = data;
      this.rotate();
    }
  }

  dequeue() {
    if (this.buffer[0] === null) {
      return null;
    } else {
      let dequeueElement = this.buffer[0];
      this.buffer[0] = null;
      this.rotate();
      return dequeueElement;
    }
  }
  
  rotate() {
    let firstElement = this.buffer.shift();
    this.buffer.push(firstElement);
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);