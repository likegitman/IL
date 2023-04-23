# Next에서의 Routing

# Link
> Next에서는 페이지를 이동할 때 a tag를 사용하지말라고 경고한다. 왜냐하면 NextJS안에는 페이지를 이동시키는  
> 특정 컴포넌트가 존재하기 때문이다. React에서도 쓰는 Link컴포넌트이다. 하지만 React와 다르게 a tag를 Link 컴포넌트의  
> 자식으로 만들고 Link 컴포넌트에 href 속성과 legacyBehavior속성을 주어 페이지를 이동시킨다.  
> Link 컴포넌트에는 style이나 className같은 속성은 작용하지않고 이러한 속성들은 a tag에 넣어야한다.  
```javascript
import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/" legacyBehavior>
          <a className>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

# useRouter
> 앱 함수 구성요소 내부에 있는 router개체에 액세스하려는 경우에는 useRouter라는 hooks를 사용한다.  

### 선언
```
const router = useRouter();
```
### push
```javascript
// 괄호안의 URL로 페이지 이동
router.push("/about");

// pathname의 URL로 페이지가 이동하고 URL에 query의 정보를 담아준다.
router.push({
  pathname: "/about",
  query: {
    id: "2",
    name: "woonrin",
  }
});
```

### replace
```
// 첫 번째 URL로 이동하고 두번째 URL로 주소만 변경해준다.
router.replace("/", "/about");
```
