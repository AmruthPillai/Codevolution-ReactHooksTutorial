import React, { Component } from 'react'

export default class ClassCounterOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => this.setState((prevState) => ({ count: prevState.count + 1 }))

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times!`
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updating Document Title')
      document.title = `Clicked ${this.state.count} times!`
    }
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={e => {
          this.setState({ name: e.target.value })
        }} />
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </>
    )
  }
}
