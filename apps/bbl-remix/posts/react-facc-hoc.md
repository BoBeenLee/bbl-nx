---
path: '/blog/react-facc-hoc'
title: 'Function as Child Component And High Order Component'
published: true
date: '2018-03-08'
---

HOC는 많은 사람들이 이미 알고 있고 자주 사용하기에 따로 설명은 하지 않겠다. <br />
[공식문서](https://reactjs.org/docs/higher-order-components.html)에도 자세히 설명 되어있다. <br />
주로 보통 HOC는 공통 기능, 횡단 관심사 분리 위해서 사용해왔었다. <br />
ex) loading, auth, logging, tracking 등등...

[Render Props](https://reactjs.org/docs/render-props.html)의 예시를 참조하여 구현해보자.

## High Order Component

```javascript
function withMouse(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
}
```

만일 [Static Methods](https://github.com/mridgway/hoist-non-react-statics)를 카피하기 위해선 별도의 로직도 필요할 것이다.

### Problem

1. Duplication Props <br/>
   Mouse, Touch기능을 같이 사용하고 싶다면
   ```javascript
   withMouse(withTouch(class extends React.Component { ... }));
   or
   @mouse
   @touch
   class Component extends React.Component { ... }
   ```
   로 구현할텐데
   만일 withTouch와 withMouse 둘다 동일한 mouse props를 넘겨줄 경우, withMouse의 mouse props는 원하는 데로 동작을 안할 것이다.
2. 여러개의 HOC를 사용할 경우 props의 복잡도 증가
   ```javascript
   compose(withMouse, withTouch, withUser, withAuth, withLoading)(...)
   or
   @mouse
   @touch
   @user
   @auth
   @loading
   ...
   ```
   여러개의 HOC를 사용할 경우, 어떤 props가 어떤 HOC에서 넘어왔는지 명시적이지 않아 직접 구현체 HOC props를 확인해야하는 경우가 생기게 된다.

### Solution

Function as Child Component으로 1, 2의 이슈를 해결할 수 있다.

## Function as Child Component

```javascript
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}
```

```javascript
 // touch, mouse implementation code ...
 render() {
    return (<Touch>
    {this.renderTouch}
    </Touch>);
 }

 renderTouch = (touch) => (<Mouse>
    { (mouse) => <Cat mouse={mouse} touch={touch} /> }
    </Mouse>);
```

위와 같이 Touch FaCC를 renderTouch arrow function으로 작성하고
Mouse는 arrow function을 직접 내부에 구현하였다. <br />
둘의 차이점은 Touch, Mouse컴포넌트 둘다 PureComponent일 경우, <br />
Mouse컴포넌트는 랜더링 될때마다 함수를 매번 생성하여 전달해줄 것이고
renderTouch는 한번만 호출되어 랜더링 될 것이다. <br />
[PureComponent - Shallow Comparison](https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent) <br />
위의 구현으로 HOC의 1,2번 문제가 해결될 수 있음을 확인할 수 있다.

- props를 직접 전달 받지 않기에 속성이 겹치는 문제가 발생하지 않는다.
- props, state, context을 function로 명시적으로 받아 처리하기에 어떤 속성이 어느 컴포넌트에서 넘어왔는지 알기 쉽다.
- FaCC로 HOC구현도 쉽게 가능하다.
  ```javascript
  function withMouse(Component) {
    return class extends React.Component {
      render() {
        return (
          <Mouse>
            {(mouse) => <Component {...this.props} mouse={mouse} />}
          </Mouse>
        );
      }
    };
  }
  ```

그리고 직접적으로 말은 안했지만 Render Prop와 FaCC는 동일한 개념이고 child이냐 render props이냐 차이일뿐 동일하다.

### Problem

[Render Props Caveats](https://reactjs.org/docs/render-props.html#caveats) 예시와 동일하게 Mouse에 PureComponent로 했을 경우, <br />
MouseTracker가 counter를 증가하는 랜더링을 하면 자식 Cat컴포넌트는 다시 랜더링하지 않는다. <br />
그 이유는 Mouse컴포넌트가 render props으로 bind된 항상 같은 함수를 받아 Mouse 컴포넌트는 랜더링되지 않는다. <br />
그래서 counter숫자가 증가되지 않는다.

[![Edit ll2xq45x3q](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ll2xq45x3q)

<b>결국 Render Props나 FaCC를 사용함으로 shouldComponentUpdate로 optimize하기 어려워지는 이슈가 있다.<br/>
(render or child로 함수를 넘겨주고 shouldComponentUpdate로 비교하기에)</b>

## Conclusion

HOC가 만능이 아닌 것처럼 FaCC, HOC를 사용할때 위와 같은 이슈들을 유념하면서 사용하자.<br />
그리고 기존에 존재하는 라이브러리를 한번 참조해보고 사용해보는 것이 좋을거같다.<br />
HOC - [React Redux(connect)](https://github.com/reactjs/react-redux), [React Router(withRouter)](https://github.com/ReactTraining/react-router), [Apollo(graphql)](https://github.com/apollographql/react-apollo) <br />
FaCC, Render Props - [React Motion](https://github.com/chenglou/react-motion), [React Apollo(Query tag)](https://github.com/apollographql/react-apollo), [urql(Query tag)](https://github.com/FormidableLabs/urql), [React Router(render props)](https://github.com/ReactTraining/react-router)

## Reference

[Render Props](https://reactjs.org/docs/render-props.html) <br />
[Michael Jackson - Never Write Another HoC](https://www.youtube.com/watch?v=BcVAq3YFiuc&index=2&list=PLXB3WIVcnsH1TZxTuF6YaiRV0eVWAJhfC&t=613s)
