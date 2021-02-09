import React from 'react';
import UnderstandSetState from './understand-setState'
import AsyncState from './async-state'
class Clock extends React.Component {
  constructor(props) {
    super(props) // 外部传递的值
    this.state = { // 内部的值
      date: new Date(),
      counter: 1
    }
  }
  /**
   * 组件已经被渲染到 DOM 中后运行
   */
  componentDidMount() {
    /**
     * setState之后state没有同步改变
     * react 需要对state合并处理之后 state才是最新的。
     * React 其实会维护着一个 state 的更新队列，
     * 每次调用 setState 都会先把当前修改的 state 推进这个队列，
     * 在最后，React 会对这个队列进行合并处理，然后去执行回调。
     * 根据最终的合并结果再去走下面的流程（更新虚拟dom，触发渲染）。
     * 
     * setState为什么要设计成异步的？
     * 保证内部的一致性：props也是异步的
     * 性能优化，将state的更新延缓到最后批量更新，如果同步更新状态会出现频繁渲染dom的现象
     */
    // 1
    this.setState((prevState, prevProps) => ({
      counter: prevState.counter += 1
    }))
    // 2
    this.setState({
      counter: 2
    }, function() {
      console.log(this.state.counter)
    })
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>hello wrold</h1>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
        <b>{this.state.counter}</b>
      </div>
    )
  }
}

/**
 * new Clock(props) // 初始化组件类
 * super(props) // 参数传递到父类
 */

export default function fn() {
  return (
    <fieldset>
      <legend>state & 生命周期</legend>
      <Clock/>
      <AsyncState />
      <UnderstandSetState />
    </fieldset>
  )
}