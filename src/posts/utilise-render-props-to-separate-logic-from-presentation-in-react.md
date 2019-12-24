---
author: Kameron Tanseli
date: '2019-12-24T13:56:26.370Z'
hero_image: ../static/js-cover.png
title: 'Utilise render props to separate logic from presentation in React'
---

Separating logic from your presentation has always been a best practise. It enforces the [single responsibility principle (SRP)](https://en.wikipedia.org/wiki/Single_responsibility_principle) and makes the code easier to test.

React however gets in trouble for letting developers mush the two concerns together with ease. Lets take an example from the [homepage](https://reactjs.org/) to explain:

```javascript
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
```

Above you can see the rather simple Timer class. You can also see the display logic for the class is coded right into the `render()` method.

The problem with having `<div>Seconds: {this.state.seconds}</div>` in the `Timer` class is that it’s not separating logic from presentation.

Lets separate the two concerns:

```javascript
const SecondsActive = ({ seconds }) => <div>Seconds: {seconds}</div>;

class TimerContainer extends React.Component {
  state = { seconds: 0 };
  tick() {
    this.setState(({ seconds }) => ({ seconds: seconds + 1 }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return this.props.view({ seconds: this.state.seconds });
  }
}

ReactDOM.render(
  <TimerContainer view={SecondsActive} />,
  document.getElementById("app")
);
```

With a simple switch to rendering via a prop we have made the `Timer` class reusable across many presentational components and have made the presentational component super easy to test!