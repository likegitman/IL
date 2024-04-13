# Queue
Queue는 데이터를 집어넣을 수 있는 선형 자료형이다. 먼저 넣은 데이터가 먼저 나오는 First in First out의 특징을 가지고 있으며
데이터를 집어넣는 enqueue와 데이터를 빼내는 dequeue, 맨 앞의 데이터를 확인하는 peek의 작업을 할 수 있다.
Queue는 순서대로 처리해야 하는 작업을 임시로 저장해두는 buffer로서 많이 사용된다.

## JS 구현 코드
js에서는 배열 자료형과 push, shift를 이용해 쉽게 구현할 수 있다.

### 함수
```js
const arr = [];
const enqueue = (item) => arr.push(item);
const dequeue = () => {
  if (this.arr.length === 0) return "Queue is Empty";
  arr.shift();
}
const peek = () => {
  if (this.arr.length === 0) return "Queue is Empty";
  return arr[0]
};

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
dequeue();
dequeue();

console.log(arr); // [3, 4]
console.log(peek()); // 3
```

### Class
```js
class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    if (this.arr.length === 0) return "Queue is Empty";
    this.arr.shift();
  }

  peek() {
    if (this.arr.length === 0) return "Queue is Empty";
    this.arr[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.arr); // [3, 4]
console.log(queue.peek()); // 3
```

# Stack
데이터를 집어넣을 수 있는 선형 자료형이다. 나중에 집어넣은 데이터가 먼저 나오는 Last in First out의 특징을 가지고 있으며
데이터를 집어넣는 push, 데이터를 빼내는 pop, 가장 나중에 들어간 데이터를 확인할 수 있는 peek 작업을 할 수 있다.
Stack은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업을 저장해 둘 때 사용된다.

## JS 코드 구현

### 함수
```js
const arr = [];
const push = (item) => arr.push(item);
const pop = () => {
  if (this.arr.length === 0) return "Stack is Empty";
  arr.pop();
}
const peek = () => {
  if (this.arr.length === 0) return "Stack is Empty";
  return arr[arr.length - 1];
};
push(1);
push(2);
push(3);
push(4);
pop();
pop();

console.log(arr); // [1, 2]
console.log(peek()); // 2
```

### Class
```js
class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }

  pop() {
    if (this.arr.length === 0) return "Stack is Empty";
    this.arr.pop();
  }

  peek() {
    if (this.arr.length === 0) return "Stack is Empty";
    this.arr[this.arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.arr); // [1, 2]
console.log(stack.peek()); // 2
```

# Tree
정말 널리 쓰이는 자료형이다. 여러개의 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용된다.

## JS 구현 코드

### Node
```js
class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node('I', [
  new Node('Love'),
  new Node('Me', [
    new Node('And'),
    new Node('You'),
  ])
]);
```

### BFS
```
function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

traverse(tree); // I Love Me And You
```

### DFS
```js
function traverse(root) {
  let queue = [root];
  while(queue.length > 0) {
    const node = queue.shift();
    console.log(node.content);
    for (let child of node.children) {
      traverse(child);
    }
  }
}

traverse(tree); // I Love Me And You
```
