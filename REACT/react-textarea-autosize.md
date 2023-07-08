# react-textarea-autosize
> React에서 자동으로 높이가 조절되는 텍스트 영역(Textarea) 컴포넌트를 구현할 수 있도록  
> 도와주는 라이브러리이다. 일반적인 `<textarea> element`와 달리, `react-textarea-autosize`를  
> 사용하면 사용자가 입력한 내용에 따라 텍스트 영역의 높이가 자동으로 조절된다.  
> 텍스트 영역에 내용이 늘어날 때 스크롤을 사용하지 않고도 모든 내용을 보여주고자 할 때  
> 유용하게 쓰이는 라이브러리이다. `textarea` 대신 `TextareaAutosize`라는 컴포넌트를 사용한다.

## TextAreaAutosize
> 이 컴포넌트를 사용하여 자동 조절되는 텍스트 영역을 생성할 수 있다.
### props
|prop|type|description|
|---|---|------|
|maxRows|number|textarea가 커질 수 있는 최대 행 수|
|minRows|number|텍스트 영역에 표시할 최소 행 수|
|onHeightChange|number|첫 번째 인수로 높이를 사용하여 텍스트 영역 높이 변경 시 호출되는 함수이다. 두 번째 인수는 사용자 지정 동작에 유용할 수 있는 추가 정보를 포함하는 개체이다.|
|cacheMeasurements|boolean|텍스트 영역의 높이를 계산할 때 이전에 계산된 측정값을 재사용한다. 기본상태는  false이다.|

## install
### npm
`npm install react-textarea-autosize`

### yarn
`yarn add react-textarea-autosize`

## Example
```js
import TextareaAutosize from 'react-textarea-autosize';

const MyComponent = () => {
  const [value, setValue] = useState();
  
  return (
    <TextareaAutosize
      value={value}
      minRows={3} // 최소 행 수
      maxRows={6} // 최대 행 수
      placeholder="Enter your text"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default MyComponent;
```
