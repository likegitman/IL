# Container
> redux store에 접근하여 원하는 상태를 받아오고, 액션도 dispatch해줄 수 있는 역할을하고  
> redux sotre와 연동된 컴포넌트를 Container Component라고 한다

# connect
> Container Component를 redux와 연동하려면 connect함수를 사용해야한다.
`connect(mapStateProps, mapDispatchProps)(연동할 컴포넌트)`라는 식으로 사용한다.
