# 탐색 알고리즘
그래프의 모든 **정점**들을 특정한 순서에 따라 방문하는 알고리즘이다.
<img width="598" alt="image" src="https://github.com/likegitman/IL/assets/105215297/b03c172f-7711-44ca-a82b-fa4832f07deb">
위 이미지에서 숫자와 같이 지점들은 정점이라하고 이 정점들을 연결한 선을 간선이라고 부른다.

## DFS
DFS는 Depth First Search의 약자로 깊이 우선 탐색이라는 뜻을 가지고 있다.
Stack 혹은 재귀 함수로 구현할 수 있다.

깊이라는 말이 어울리게 시작점에서 갈 수 있는 정점부터 깊이 있게 파고든다.
현재 정점과 연결된 정점들을 하나씩 갈 수 있는지 검사하고 정점으로 갈 수 있다면 그 정점으로 가고 이런 행위를 반복한다.
더 이상 방문할 정점이 없다면 가장 가까운 노드로 되돌아와 다시 탐색을 진행한다. 한 번 간 정점을 다시 가면 안 되기 때문에 표시를 해둔다.

### JS  구현 코드
```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node); 
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

console.log(DFS(graph, "A"));
```

## BFS
BFS Breadth First Search의 약자로 너비 우선 탐색이라는 뜻을 가지고 있다.
시작점에서 가까운 정점부터 순서대로 방문한다. 출발점을 Queue에 넣고 Queue가 빌 때까지 아래 과정을 반복한다.
1. 큐에 저장된 정점을 하나 Dequeue한다.
2. 뺀 정점과 연결된 모든 정점을 큐에 넣는다.
깊이 우선 탐색과 다르게 단계별로 탐색을한다.

### JS 구현 코드
```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색을 시작

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // 선입선출
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]]
    }
  }
  return visited;
}

console.log(BFS(graph, "A"));
```
