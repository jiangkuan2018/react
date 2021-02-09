import React from 'react'

export default class App extends React.Component {
  state = {val: 0}
  increment = () => {
    
    this.setState({val: this.state.val + 1})
    console.log(this.state.val)
  }
  render() {
    return (
      <div onClick={this.increment}>
        {`Counter is: ${this.state.val}`}
      </div>
    )
  }
}