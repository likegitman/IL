# Storybook
> 스토리북(Storybook)은 한 문장으로 정의가 어려울 정도로 다양한 방식으로 사용되고 있는 UI 컴포넌트 개발 도구이다.  
> 회사의 UI 라이브러리를 내부 개발자들을 위해 문서화하기 위해서 사용할 수 있고 외부 공개용 디자인 시스템을  
> 개발하기 위한 기본 플랫폼으로도 사용할 수 있다. `storybook`의 기본 구성 단위는 이름 그대로 `story`이며  
> 하나의 UI 컴포넌트는 보통 하나 이상의 `story`를 가지게 된다. 각 `story`는 해당 UI 컴포넌트가 어떻게  
> 사용될 수 있는지를 보여주는 하나의 예시라고 할 수 있다. `storybook`을 사용하면 UI 컴포넌트가 각각 독립적으로  
> 어떻게 랜더링되는지 시각적으로 시험해보며 개발을 진행할 수 있고 해당 UI 라이브러리를 사용하는 개발자 입장에서도  
> 코드를 보지 않고도 미리 각 UI 컴포넌트를 시험해보며 사용할 수 있다.

## UI
![image](https://github.com/likegitman/TIL/assets/105215297/87a83ceb-4832-4cdb-b484-ec6997cbf940)


## 디자인 시스템
> 재사용이 가능한 UI 컴포넌트들로 이루어져 복잡하고 견고하며 사용자가 접근하기에 용이한  
> **사용자 인터페이스**를 구축할 수 있다. 디자이너와 개발자 모두 UI 컴포넌트를 다루기 때문에
> 디자인 시스템은 두 분야를 연결하는 다리이기도 하다.

## Example

### component
```js
import React from 'react'
import './Button.css'
export default function Button({ children, color }: {children: React.ReactNode, color: string}) {
  return <button className={`button ${color}`}>{children}</button>
}
```
### story
```js
import Button from '../components/Button'

export default {
  title: 'Button', // /를 넣어주면 폴더안의 파일로도 만들 수 있다.
  component: Button
}

export const Primary = () => <Button color='blue'>Primary</Button>
export const Secondary = () => <Button color='mintcream'>Secondary</Button>

// args
export const Primary = () => <Button {...args} />
Primary.args = { children: 'Primary', color: 'blue' }

// or
const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Primary', color: 'blue' }
```

## main
> `storybook`폴더안의 위치하고 있으며 `story`의 위치, 사용하는 `addon`과 기타 설정들을 포함해 `storybook`  
> 프로젝트의 동작을 정의한다.
```js
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
```

## preview
> 해당 프로젝트의 모든 `story`에 전역적으로 적용될 `format`을 세팅하는 곳이다. `decoratoer`나 `parameters` 등이
> `fotmat`에 해당한다.
```js
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
```

## addon
>  `storybook` 환경에서 기능을 확장하고 개선하기 위한 확장 모듈을 의미한다.

### controls
> 코딩할 필요 없이 구성 요소의 인수와 동적으로 상호작용할 수 있는 그래픽 UI를 제공한다. storybook화면에 패널이
> 생성되기에 실시간으로 `story` 편집을 할 수 있다.
```js
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}
```

### actions
> `story`의 `event handler` 인수에 의해 수신된 데이터를 표시하는 데에 사용된다.

```js
import { action, actions } from '@storybook/addon-actions'

export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => <Button color='blue' onClick={action('Click handler')}>Primary</Button>
export const Secondary = () => <Button {...actions('onClick', 'onMouseOver')} color='red'>Secondary</Button>
```

### docs
> UI 구성 요소에 대한 포괄적인 **문서**를 생성하는데에 도움을 주는 `addon`이다. `story`를 더 알기 쉬운 문서로  
> 변환할 수 있고 `MDX`와 블럭 구성요소의 기능에 대해 명확하고 간결하게 볼 수 있게 해준다.
```js
import * as DocBlock from '@storybook/blocks'

export default {
  title: 'form/Button',
  component: Button,
  decorators: [withKnobs],
  tags: ["autodocs"], // component story에 대한 자동 생성 문서를 활성화한다. 
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Source />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Stories />
        </>
      )
    }
  }
}
```

### knobs
> 사용자가 컴포넌트(story)의 속성값을 실시간으로 조정하고 테스트할 수 있게 도와준다.  
> 이로인해 개발자는 동적으로 `story`을 시뮬레이션 할 수 있다.
