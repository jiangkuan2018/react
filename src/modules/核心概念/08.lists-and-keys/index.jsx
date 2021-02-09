import React from 'react'

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

export function NumbersList() {
  const numbers = [1,2,3,4,5]
  return (
    <ul>
      {numbers.map(num => <ListItem value={num} key={num}/>)}
    </ul>
  )
}
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
export function Blog(props) {
  props = {posts: posts}
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ))
  return (
    <div>
      {sidebar}
      <br/>
      {content}
    </div>
  )
}

export default function ListAndKeys() {
  return (
    <fieldset>
      <legend>lists and keys</legend>
      <NumbersList />
      <Blog />
    </fieldset>
  )
}