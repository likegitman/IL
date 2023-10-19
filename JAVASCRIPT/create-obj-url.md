# URL.createObjectURL
> 특정 파일 객체나 로컬 파일 또는 데이터의 참조를 가리키는 새로운 객체 `URL`을 생성한다. 생성한 값은 현재 창이나, 객체를 생성한 문서 내에서만
> 유효하고 새 객체 `URL`은 특정 `File`객체나 `Blob`객체로 표현할 수 있다.
`let objectURL = window.URL.createObjectURL(blob)`
> 매개변수로 전달한 `blob`은 `URL`을 생성할 `File`객체나 `Blob`객체이다. 생성된 `objectURL`은 해당 파일의 전체내용을 `URL` 텍스트로
> 변환한 값이다. 객체의 `URL` 사용을 마쳤다면 다음 `mehthod`를 호출하여 메모리에서 해제해주는 것이 좋다.
window.URL.revokeObjectURL(objectURL)`
