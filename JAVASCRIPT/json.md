# JSON
> JavaScript Object Notation

## JSON api 

```
// 1. stringify
stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string

// 2. parse
parse(text: string, reviver?: (this: any, key: string, value: any) => any): any
```

## Object to JSON

```
let json;

const rabbit = {
    name: 'raby',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
// output: {"name":"raby","color":"white","size":null,"birthDate":"2022-08-14T11:50:21.482Z"}
```


```
let json;

const rabbit = {
    name: 'raby',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ["name"]);
console.log(json); // output: {"name":"raby"}
```


```
let json;

const rabbit = {
    name: 'raby',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);
// output: 
// key: , value: [object Object]
// key: name, value: raby
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2022-08-14T11:58:09.673Z
// key: jump, value: () => {
//                 console.log(`${name} can jump!`);
//           }
// {"name":"raby","color":"white","size":null,"birthDate":"2022-08-14T11:58:09.673Z"}

```


```
let json;

const rabbit = {
    name: 'raby',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'woonrin' : value;
});
console.log(json);
// output:
// key: , value: [object Object]
// key: name, value: raby
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2022-08-14T12:05:18.365Z
// key: jump, value: () => {
//              console.log(`${name} can jump!`);
//          }
// {"name":"woonrin","color":"white","size":null,"birthDate":"2022-08-14T12:05:18.365Z"}
```

## JSON to Object
