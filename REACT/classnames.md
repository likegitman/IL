# Classnames
> 조건부 className을 정할 때 쓰는 모듈.  
> 여러 클래스를 추가할 때 뿐만 아니라, 특정 값이 true/false임에 따라 클래스명을 추가하거나,  
> 추가하지 않도록 하는 것을 간단히 구현할 수 있게 해 줍니다.

```javascript
import cn from "classnames";

function TestComponent(props) {

  const {data, description} = props;
  const valid = data.find(item => item.text === 'abc');

  return (
    <div className={classnames('box-info', {mg-10: valid})}>
      {description}
    </div>
  );
}
export default TestComponent;
```

```javascript
className={classnames('box-info', 'mg-10')} // 'box-info mg-10'

className={classnames(['box-info', 'mg-10'])} // 'box-info mg-10'

className={classnames('box-info', {mg-10 : false})} // 'box-info'

className={classnames('box-info', {mg-10 : null})} // 'box-info'

className={classnames('box-info', {mg-10 : undefined})} // 'box-info'

className={classnames('box-info', {mg-10 : true})} // 'box-info mg-10'

className={classnames('box-info', {mg-10 : 'abc'})} // 'box-info mg-10'

```
