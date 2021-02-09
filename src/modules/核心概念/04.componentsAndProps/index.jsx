// function Welcome(props) {
//   return <h1>hello {props.name}</h1>
// }
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
function formateDate(date) {
  return date.toLocaleDateString()
}
function Avatar(props) {
  return (
    <img src={props.user.avatarUrl} alt={props.user.name} className="Avator"/>
  )
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formateDate(props.date)}
      </div>
    </div>
  )
}
export default function fn(params) {
  return (
    <fieldset>
      <legend>组件 & props</legend>
      <Comment author={comment.author} text={comment.text} date={comment.date} />
    </fieldset>
  )
}