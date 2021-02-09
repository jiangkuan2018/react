import React from 'react'

function FancyBorder(props) {
  return (
    <div style={{ border: '1px solid #ddd' }} className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
/**
 * 包含关系 props.children
 * 特例关系
 */
export function WelcomeDialog() {
  return (
    <Dialog title='Welcome' message='Thank you for visiting our spaceraft!' />
  )
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

export class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }
  handleSignUp = (e) => {
    alert(`Welcome aboard, ${this.state.login}`)
  }
  render() {
    return (
      <Dialog
        title='Mars Exploration Program'
        message='How shlud me refer to you?'
      >
        <input type="text" onChange={this.handleChange} value={this.state.login} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }
}

export default function Fn() {
  return (
    <fieldset>
      <legend>组合vs继承</legend>
      <WelcomeDialog />
      <SignUpDialog />
    </fieldset>
  )
}