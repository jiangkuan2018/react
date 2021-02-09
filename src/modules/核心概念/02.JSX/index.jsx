import React from 'react'
function Jsx() {
  return (
    <div tabIndex={123} className="jsx">
      jsx
    </div>
  )
}
export default function JsxC() {
  return (
    <fieldset>
      <legend>jsx</legend>
      <Jsx />
    </fieldset>
  )
}