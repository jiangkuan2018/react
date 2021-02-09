import React from 'react'

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
export class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {
          isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    )
  }
}

export function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length > 0 && <h2>
          you have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }
  return (
    <div className="warning">
      Warning
    </div>
  )
}

export class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
  }
  handleToggleClick = () => {
    this.setState((state) => {
      return {
        showWarning: !state.showWarning
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'show'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </React.Fragment>
    )
  }
}

export default function ConditionalRendering() {
  return (
    <fieldset>
      <legend>条件渲染</legend>
      <LoginControl />
      <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
      <Page />
    </fieldset>
  )
}