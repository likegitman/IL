# background

## background-attachment
> 배경이미지를 뷰포트내에 고정할지, 아니면 자신의 컨테이닝 블록과 함께 스크롤할지 결정한다.

## value
* scroll
> 배경을 요소 자체에 고정한다. 요소에 스크롤이 존재하여도 배경은 스크롤이되지않아서 요소의 테두리에  
> 배경이미지를 부착한것과 같은 효과이다.

* fixed
> 배경을 뷰포트에 대해 고정한다. scroll고 마찬가지로 요소에 크롤이 존재하여도 배경은 스크롤되지 않는다.  

* local
> 배경을 요소 콘텐츠에 대해 고정한다. 요소에 스크롤이 존재한다면 배경은 콘텐츠와 함께 스크롤이된다.  
> 배경 페인트 영역과 배경 위치 영역은 테두리 틀이 아닌 스크롤 가능 영역을 기준점으로 삼는다.

## background-clip
> 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 박스 중 어디까지 차지할 지 지정한다.

## value
* border-box
> 배경이 테두리의 바깥 경계까지 차지한다.

* padding-box
> 배경이 안쪽 여백의 바깥 경계까지 차지한다. 단 테두리 밑에는 배경을 그리지 않는다.

* content-box
> 배경이 콘텐츠 박스에 맞춰서 영역을 차지한다.

* text
> 배경을 텍스트 위에만 그린다.
> 구형 IE에서 작동하지 않는 것을 고려해 webkit을 함께 사용하는 것이 좋다.

```css
h1{
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## background-color
> 요소의 배경색을 지정한다.
 
## value
* 키워드 ex) red, blue, pink
* 16진수 ex) #ffffff, #000000
* rgb ex) rgb(255, 255, 255), rgba(255, 255, 255, 0) 등등

## background-image
> 요소의 배경 이미지를 한 개나 여러개로 지정한다.

## value
* none
> 배경이미지가 없다는 것을 나타낸다.

* url
> 배경의 이미지 경로를 적는다. 여러개의 배경을 지정할 때는 쉼표를 사용하여 나타내고  
> 먼저 지정한 이미지가 Z축 상으로 위에 위치한다.

## background-position
> 배경 이미지의 초기 위치를 설정한다.

## value

* keyword ex) top, bottom, left, right, center

* percentage
* length ex) cm, em

* mix
```css
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;
```

## background-repeat
> 배경이미지의 반복 방법을 지정한다.

## value
* no-repeat
> 이미지를 반복하지 않는다.

* repeat
> 요소의 배경 영역을 채울 때까지 이미지를 반복한다.

* space
> 요소가 잘리지 않는 만큼 이미지를 반복한다.  
> 제일 처음과 마지막 반복 이미지는 요소의 서로 멀어져 고정되고 각 이미지  
> 사이에 남은 여백을 고르게 분배한다.

* round
* 배경 패턴이 들어갈 만큼 채우고 늘려서 배경 이미지를 꽉 채운다.

## background-size
> 배경이미지의 크기를 설정한다.

## value
* contain
> 이미지가 잘리거나 찌르거지지 않는 한도 내에서 제일 크게 설정한다.

* cover
> 이미지의 가로세로비가 요소와 세로면 이미지를 수직 또는 수평으로 하여 빈 공간이 생기지 않도록 설정한다.

* length ex) px, em, rem

* percentage

* auto
> 배경이미지의 크기를 원본 그대로 유지한다.
