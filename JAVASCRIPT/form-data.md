# FormData
> HTML에서는 `server`에 데이터를 전송하기 위해 `form` 태그를 이용해 `input` 값을 보내는 것이 기본적이다.
```html
<form action"./login" method="post">
  <input type="text" name="id" value="아이디" />
  <input type="password" name="password" value="비밀번" />
</form>
```
> 하지만 `JavaScript`에서 `FormData() class`를 이용해서 `script`로도 값을 전송할 수 있다.
> 따라서 `FormData`란 `HTML`이 아닌 `JavaScript`에서 `form`의 `data`를 다루는 객체라고 볼 수 있다.
> 여기서 `HTML`로도 충분히 `data`를 전송할 수 있는데 굳이 `JavaScript`에서 보내는지 의문이 생긴다.
> `JavaScript`에서 `form data`를 다루는 이유는 이미지같은 `multimedia`파일을 페이지 전환없이 비동기로
> 제출하고 싶을 때 주로 사용된다.
```js
<form id="formElem">
  <input type="text" name="name" value="Woonrin">
  <input type="text" name="surname" value="Lee">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("ExampleUrl", {
      method: "POST",
      body: new FormData(formElem)
    });

    let result = await response.json();
    
    alert(result.message);
  };
</script>
```

## Method
```js
formData.append(name, value);
// form의 name과 value를 field 에 추가
// input의 name 속성과 value 입력 값 역할

formData.append(name, blob, fileName);
// input의 type이 file 인 경우에 사용
// fileName은 file의 이름에 해당

formData.delete(name);
// 주어진 name으로 filed를 제거

formData.get(name);
// 주어진 name의 해당하는 field value를 반환

formData.getAll(name);
// append 함수로 추가시 name이 중복 가능
// 따라서 주어진 name에 해당하는 field의 모든 value를 반환

formData.has(name);
// 주어진 name에 해당하는 field가 있을 경우 true, 없으면 false를 반환

formData.set(name, value);
formData.set(name, blob, fileName);
// append 함수 처럼 field를 추가
// append와 차이는 기존 key가 있으면 key값을 모두 덮어버림
```

## Example

### Server Example
```js
let formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

fetch('exampleUrl', {
  method: 'POST',
  cache: 'no-cache',
  body: formData
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
});
```

### img Example
```js
<body>
  <input type="file" id="fileInput">
  <button type="submit" id="button">제출</button>
 
  <script>
    const file = document.getElementById("fileInput");
    const btn = document.getElementById("button");
 
    btn.addEventListener("click", () => {
      let formData = new FormData();
      formData.append("attachedImg", fileInput.files[0]);            
    });
  </script>
</body>
```

