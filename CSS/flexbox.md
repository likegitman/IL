# Flexbox

## flex-direction
> 열의 순서를 정함

1. row (기본 값)
> 왼쪽에서 오른쪽 방향으로 정렬
2. row-reverse
> 오른쪽에서 왼쪽 방향으로 정렬
3. column
> 위에서 아래 방향으로 정렬
4. column-reverse
> 아래에서 위 방향으로 정렬

## flex-wrap
> 아이템들이 한 줄에 가득 찬다면 줄을 바꿀것인가  
  바꾸지않고 작아질 것인가를 결정

1. nowrap (기본 값)
> 줄을 바꾸지 않음
2. wrap
> 줄을 바꿈
3. wrap-reverse
> 거꾸로 줄이 바꿔짐

##  flex-flow
> flex-direction과 flex-wrap을 동시에 사용가능
`flex-flow":column nowrap;`

## justify-content
>  아이템들을 어떻게 배치할것인지 결정(중심축)

1. flex-start (기본값)
> 왼쪽 축에서 오른쪽 방향으로
2. flex-end
> 오른쪽 축에서 왼쪽 방향으로 배치(flex-direction과 다르게 순서유지)
3. center
> 아이템들을 센터에 배치(맨 위쪽)

1. space-around
> 박스를 둘러싸는 스페이싱을 넣어줌  
  첫번째 아이템은 스페이싱이 작고 그 다음  
  아이템들은 스페이싱이 큼 
2. space-evenly
> space-around와 다르게 스페이싱의 간격을  
  똑같이 넣어줌
3. space-between
> 아이템들의 맨 왼쪽과 오른쪽은 화면에 맞게 붙이고  
  나머지 아이템들의 간격을 똑같게 해줌

## align-items
> 아이템들을 어떻게 배치할것인지 결정하는 속성 값(반대축)

1. flex-start(기본 값)
2. flex-end
3. center
> 아이템들을 수직적으로 중심에 놓게 해줌
4. baseline
> 아이템들의 열이나 행을 균등하게 해줌  
  ex)한 가지 아이템만 padding값으로 줄이 맞지않을 때

## align-content
> 아이템들을 어떻게 배치할것인지 결정(반대축)

1. flex-start
2. flex-end
3. center
> 아이템들을 센터에 배치(화면의 중심으로 모임)
4. space-around
5. space-between
> 위와 아래의 아이템들은 화면에 맞게 붙이고  
  중간의 아이템들의 스페이싱이 늘어 남


## item들의 속성 값
## flex-grow
> 자신고유의 사이즈가 아닌 화면을 채우려고 사이즈를 늘리게 함
* 0,1,2,3,4,5...~~

## flex-shrink
> 화면이 작아질때 아이템들이 어떻게 행동할것인지에 대해 결정
* 0,1,2,3,4,5...~~

## flex-basis
> 아이템들이 얼마나 공간을 차지해야하는지에 대해 세부적으로 결정  
  flex-grow, flex-shrink를 사용하지 않아도 됨  
* auto...~~ (% 로 결정)

## align-self
> 아이템을 개별로 위치를 배치(중심축,반대축에 영향받지 않음)

1. flex-start(기본 값)
2. flex-end
3. center
4. baseline
