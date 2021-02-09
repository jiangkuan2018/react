import React from 'react'

/**
 * 受控组件
 * 在HTML中，表单元素（如<input>、<textarea>、<select>）
 * 通常自己维护state（这个state是指input元素自身的行为会记录用户输入的值），
 * 并根据用户输入进行更新。
 * 而在react中，可变状态（mutable state）通常保存在组件的state属性中，并且只能通过使用setState来更新
 * ⬆️⬆️⬆️⬆️⬆️⬆️ (上面这句的意思是：在react组件中，需要变动的值（mutable state）通常维护在组件的state属性中。并且更新state来控制UI变化（输入的值也是UI变化）)
 * 
 * 我们可以把两者结合起来，使React的state成为唯一数据源（表单元素自身维护记录的值变成使用React的state）。渲染表单的React组件还控制着用户输入过程中表单发生的操作。
 * 被React以这种方式控制取值的表单输入元素就叫做受控组件
 * 对于受控组件来说，输入的值始终由 React 的 state 驱动
 */

 /**
  * 受控组件input
  */
export class NameFrom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    alert('提交的名字：' + this.state.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="提交"/>
        <input type="text" name="" id=""/> {/* 非受控组件 */}
      </form>
    )
  }
}

export class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    }
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = (e) => {
    alert('提交的文章：'+this.state.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章：
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
/**
 * 使用select的value属性控制选中的值
 * 使用multiple=true value为数组实现select多选
 * <select multiple={true} value={['B', 'C']}>
 */
export class FavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'coconut'}
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = (e) => {
    alert('你喜欢的风味是：' + this.state.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味：
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}

export class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }
  handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : parseInt(target.value)
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form>
        <label>
          参与：
          <input 
            type="checkbox" 
            name="isGoing" 
            checked={this.state.isGoing} 
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          来宾人数：
          <input 
            type="number" 
            name="numberOfGuests" 
            value={this.state.numberOfGuests} 
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}

/**
 * 非受控组件
 */

export class UncontrolledNameForm extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef() // 创建react ref 保存input dom实例
    this.checkbox = React.createRef()
  }
  handleSubmit = (e) => {
    alert('A name was submitted: '+ this.input.current.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue="Bob" type="text" ref={this.input}/>
          <input type="checkbox" defaultChecked={true} ref={this.checkbox}/>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}

export class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef()
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.fileInput.current.files[0])
    // this.fileInput.current.files[0].arrayBuffer().then(res => {
    //   console.log(res)
    // })
    // this.fileInput.current.files[0].text().then(res => {
    //   console.log(res)
    // })
    
    // console.log(this.fileInput.current.files[0].stream().getReader().read().then(res => {
    //   console.log(res)
    // }))
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput}/>
        </label>
        <br/>
        <button type="submit">Sumbit</button>
      </form>
    )
  }
}


export default function Forms() {
  return (
    <fieldset>
      <legend>表单</legend>
      <NameFrom />
      <EssayForm />
      <FavorForm />
      <Reservation />
      <UncontrolledNameForm />
      <FileInput />
    </fieldset>
  )
}