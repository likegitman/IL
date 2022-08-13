# Virtual Class

> 선택자 뒤에 :가상이벤트를 붙이면  
  특정 이벤트마다 적용 할 스타일을 설정 할 수 있으며,  
  이를 가상 클래스라고 합니다.
  
## Example

* `:link` - 방문한 적이 없는 링크
* `:visited` - 방문한 적이 있는 링크
* `:hover` - 마우스를 롤오버 했을 때
* `:active` - 마우스를 클릭했을 때
* `:focus` - 포커스 되었을 때 (input 태그 등)
* `:first` - 첫번째 요소
* `:last` - 마지막 요소
* `:first-child` - 첫번째 자식
* `:last-child` - 마지막 자식
* `:nth-child(2n+1)` - 홀수 번째 자식 

## Use

```
<html>

<head>
    <style>
        /*class가 hover_input인 tag에 마우스 커서를 올리면 배경색이 빨간색으로 변한다*/
        .hover_input:hover {
            background-color: red;
        }
    </style>
</head>

<body>
    <input type="text" class="hover_input">
</body>

</html>
```
