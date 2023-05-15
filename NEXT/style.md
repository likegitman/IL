# NextJS에서의 Style

# style tag
> style tag를 사용하며 그 안에 jsx prop을 넣어준다. 그리고 style tag안에 중괄호를 열어주고  
> 백틱(``)안에 css를 작성한다. 이렇게 style을 적용하면 css로 작성한 태그는 `jsx-2a71409d...`등과 같은  
> 특이한 이름의 class를 가지게된다. style jsx tag 방식은 독립적이기 때문에 한 컴포넌트에서 작성을 했다면  
> 다른 컴포넌트에서는 접근할 수 없다. 하지만, global styles를 추가해준다면 다른 컴포넌트에도 해당 style tag가  
> 적용된다.
```javascript
import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <img src="/vercel.svg"/>
            <div>
                <Link href="/" legacyBehavior>
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                  }
                  img {
                    max-width: 100px;
                    margin-bottom: 5px;
                  }
                  nav a {
                    font-weight: 600;
                    font-size: 18px;
                  }
                  .active {
                    color: tomato;
                  }
                  nav div {
                    display: flex;
                    gap: 10px;
                  }
            `}</style>
        </nav>
    )
}
```

# Global Stylesheet
