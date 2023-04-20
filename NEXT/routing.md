# Next에서의 Routing

# Link
> Next에서는 페이지를 이동할 때 a tag를 사용하지말라고 경고한다. 왜냐하면 NextJS안에는 페이지를 이동시키는  
> 특정 컴포넌트가 존재하기 때문이다. React에서도 쓰는 Link컴포넌트이다. 하지만 React와 다르게 a tag를 Link 컴포넌트의  
> 자식으로 만들고 Link 컴포넌트에 href 속성의 url을 넣고 legacyBehavior속성을 주어 페이지를 이동시킨다.  
> Link 컴포넌트에는 style이나 className같은 속성은 작용하지않고 이러한 속성들은 a tag에 넣어야한다.

# useRouter
> 앱 함수 구성요소 내부에 있는 router개체에 액세스하려는 경우에는 useRouter라는 hooks를 사용한다.  
> `const router = useRouter();`  
### 위 코드의 router가 반환하는 개체들
#### 1. pathname ( String ) 
/pages뒤에 오는 현재 경로 파일의 경로이다. 그렇기에 basePath, locale 및 후행 슬래시는 포함되지않는다.

#### 2. query ( Object )
