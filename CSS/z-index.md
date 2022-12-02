# z-index

> position 속성을 이용하면 요소를 겹치게 놓을 수 있는데,  
  이때 요소들의 수직 위치를 z-index 속성으로 정한다. 값은 정수이며,   
  숫자가 클 수록 위로 올라오고, 숫자가 작을 수록 아래로 내려간다.
  
  
## USE

```
div{
    width: 80px;
    height: 80px;
    position: absolute;
}

/*z-index 값의 크기에 따라 div_1이 맨 위, div_2가 중간, div_3가 맨 아래에 위치하게 된다*/

.div_1 {
    background-color: red;
    top: 20px;
    left: 200px;
    z-index: 9999;
}
.div_2 {
    background-color: blue;
    top: 50px;
    left: 260px;
    z-index: 1;
}
.div_3 {
    background-color: green;
    top: 80px;
    left: 230px;
    z-index: -1;
}
```

## 
