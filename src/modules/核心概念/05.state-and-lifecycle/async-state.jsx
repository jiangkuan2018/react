import React from 'react'

class App extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
     // 生命周期中调用
    this.setState({ count: this.state.count + 1 })
    console.log('lifecycle: ' + this.state.count)
    
    setTimeout(() => {
      // settimeout调用
      this.setState({count: this.state.count + 1})
      this.setState({count: this.state.count + 1})
      this.setState({count: this.state.count + 1})
      console.log('settimeout: ' + this.state.count)
    }, 0);
    
    document.getElementById('div2').addEventListener('click', this.increment2)
  }
  increment = () => {
    this.setState({count: this.state.count + 1 })
    console.log('react event:' + this.state.count)
  }
  increment2 = () => {
    this.setState({count: this.state.count+1})
    console.log('dom event: ' + this.state.count)
  }
  render() {
    return (
      <div className="App">
        <h1>count: {this.state.count}</h1>
        <div id="div1" onClick={this.increment}>
          div1 click me and count + 1
        </div>
        <div id="div2">
          div2 click me and count+1
        </div>
      </div>
    )
  }
}

export default App