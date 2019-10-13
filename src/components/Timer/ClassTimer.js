import React, { Component } from 'react'

export default class ClassTimer extends Component {
  interval

  constructor(props) {
    super(props)

    this.state = {
      timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState((prevState) => ({
      timer: prevState.timer + 1
    }))
  }

  render() {
    return (
      <div>
        <h2>Class Timer</h2>
        <h1>{this.state.timer}</h1>

        <button onClick={() => clearInterval(this.interval)}>Stop Timer</button>
      </div>
    )
  }
}
