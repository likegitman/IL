# CSS Unit
> css의 단위들 정리

# px
> 절대 길이 단위이다. 그렇기에 어떤 요인도 상관없이 항상 동일한 값으로 고정된다.

# rem, em
> 글꼴의 크기를 나타내는 상대적 단위이다. em은 상위요소의 글꼴 크기에 비례해서 크기가 변한다면  
> rem은 뿌리가 되는 요소 글꼴 크기에 비례한다.

* em
> body는 body의 상위요소 html의 font-size인 10px에 비례하여 크기가 변하고  
> p는 p의 상위요소 body의 font-size에 비례하여 크기가 변한다.
```css
html {
  font-size: 10px;
}

body {
  font-size: 2em; // 20px
}

p {
  font-size: 3em; // 60px
}
```

* rem
> p 태그는 상위요소인 body가 아닌 그 뿌리가 되는 html의 font-size에 비례하여 크기가 커진다.
```css
html {
  font-size: 10px;
}

body {
  font-size: 2rem; // 20px
}

p {
  font-size: 3em; // 30px
}
```

# vw, vh
> vw와 vh는 뷰포트(화면 display상의 표시영역 웹에서는 브라우저창)크기의 100분의 1인 단위이다.  
> 브라우저창의 넓이와 높이가 1000px라면 1vw와 1vh는 10px이다. 주로 반응형 웹을 만들 때 사용하는 단위이다.
