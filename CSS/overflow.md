# Overflow
> 요소의 콘텐츠(글자, 이미지, 컴포넌트 등)가 너무 커서 요소의  
> 블록 서식 맥락에 맞출 수 없을 때의 처리법을 지정한다.  
  
# Construction
1. overflow를 사용할 때는 height 또는 max-height, min-height를 설정한다.  
2. keyword를 1개 또는 2개를 작성하는데 1개를 쓸 때는 x축, y축 모두에 적용되고  
   2개를 쓸 때는 첫번째 값은 x축, 두번째 값은 y축에 적용된다.
```
/* 키워드 값 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;

/* 전역 값 */
overflow: inherit;
overflow: initial;
overflow: unset;
```

# Keyword
## visiable
> 콘텐츠를 자르지 않으며 안쪽 여백 상자 밖에도 그릴 수 있다.

## hidden
> 콘텐츠를 안쪽 여백 상자에 맞추기 위해 잘라낸다.
* 스크롤바 X
* code를 이용한 스크롤 가능

## clip
> 콘텐츠를 안쪽 여백 상자에 맞춰 자른다. hidden과 다르게 `clip`은 code를 이용한 스크롤 불가능하다.
  
## scroll
> 콘텐츠를 안쪽 여백 상자에 맞추기 위해 잘라냅니다.  
> 브라우저는 콘텐츠를 실제로 잘라냈는지 여부를 따지지 않고 항상 스크롤바를 노출한다.
  
## auto
> 브라우저가 결정한다. 콘텐츠가 안쪽 여백 상자에 들어간다면 `visible`과 동일하게 보이지만  
> 새로운 블록 서식 문맥을 생성한다. 또 콘텐츠가 넘칠때는 스크롤바를 노출시킨다.
