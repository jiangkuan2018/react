import React from 'react'

export function ActionLink() {
  function handleClick(e) {
    e.preventDefault() // react里需要调用 preventDefault 取消默认行为
    console.log('the link was clicked')
  }
  return (
    <a href="/" onClick={handleClick}>
      click me
    </a>
  )
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      list: [
        {
          id: 0,
          name: 'AAA'
        },
        {
          id: 1,
          name: 'BBB'
        },
        {
          id: 2,
          name: 'CCC'
        }
      ]
    }
  }
  handleClick = () => {
    console.log(this)
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  del = (id) => {
    this.setState({
      // 操作数组
      list: this.state.list.filter((item) => item.id !== id)
    }, () => {
      console.log(this.state.list)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <ul>
          {
            this.state.list.map(item => {
              return item && (
                <li key={item.id}>
                  <span>
                    {item.name}
                  </span>
                  <button onClick={this.del.bind(this, item.id)}>
                    del
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default function HandleEvent() {
  return (
    <fieldset>
      <legend>事件处理</legend>
      <ActionLink />
      <Toggle />
    </fieldset>
  )
}