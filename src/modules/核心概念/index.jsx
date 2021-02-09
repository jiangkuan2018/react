import React, { Suspense } from 'react'
import Jsx from './02.JSX/index';
import Comment from './04.componentsAndProps/index'
import StateAndLifecycle from './05.state-and-lifecycle/index';
import HandleEvent from './06.handling-events/ActionLink'
import ConditionalRendering from './07.conditional-rendering/index'
import ListAndKeys from "./08.lists-and-keys/index";
import Forms from './09.forms/index'
import Calculator from './10.状态提升/index'
import Combination from './11.组合vs继承/index'
const FilterableProductTableWapper = React.lazy(() => import('./12.React哲学/index'))

export default function CoreConcept(params) {
  return (
    <div className="min-w-800">
      <Jsx />
      <Comment />
      <StateAndLifecycle />
      <HandleEvent />
      <ConditionalRendering />
      <ListAndKeys />
      <Forms />
      <Calculator />
      <Combination />
      <Suspense fallback={<div>loading...</div>}>
        <FilterableProductTableWapper />
      </Suspense>
    </div>
  )
}