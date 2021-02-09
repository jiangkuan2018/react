import React, {Suspense, lazy} from 'react'

const OtherComponent = lazy(() => import('./OtherComponent'))

export default function MyComponent() {
  return (
    <fieldset>
      <legend>代码分割</legend>
      <Suspense fallback={<div>loading</div>}>
        <OtherComponent/>
      </Suspense>
    </fieldset>
  )
}