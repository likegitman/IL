# Quiz

## 배열에서 문자열 만들기
```
{
    const animal = ['dog', 'cat', 'fox'];
    // 구분자를 나타내면 원래 ',' 였던 기호가 괄호안의 string로 바뀌게 된다
    const result = animal.join(' , and '); 
    console.log(result); // output: dog , and cat , and fox
}
```

## 문자열에서 배열 만들기
```
{
    const animal = '＃, ＆, ＠, ★';
    // split(separator: string | RegExp, limit?: number) => spring[]
    const result = animal.split(',');
    console.log(result); // output: (4) ['＃', ' ＆', ' ＠', ' ★']
}
```

```
{
    const animal = '＃, ＆, ＠, ★';
    // split(separator: string | RegExp, limit?: number) => spring[]
    const result = animal.split(',', 2);
    console.log(result); // output: (2) ['＃', ' ＆']
}
```

## 배열 순서 바꾸기
```
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // output: (5) [5, 4, 3, 2, 1]
    // reverse()는 기존의 배열의 순서도 바꾼다 
    console.log(array) // output: (5) [5, 4, 3, 2, 1]
}
```

## 처음의 배열에 영향 없이 새 배열 만들기
```
{
    const array = [1, 2, 3, 4, 5];
    // slice(start?: number, end?: number)
    // end number를 4로하게되면 그 index값(5)이 배제되기때문에 end number를 5로한다
    const result = array.slice(2, 5); 
    console.log(result); // output: (3) [3, 4, 5]
    console.log(array); // output: (5) [1, 2, 3, 4, 5]
}
```
