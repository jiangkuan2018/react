import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import CoreConcept from './modules/核心概念/index'
// import SeniorGuidance from './modules/高级指引/index'
const SeniorGuidance = React.lazy(() => import('./modules/高级指引/index'))

function App() {
  return (
    <BrowserRouter>
      <div className="App container mx-auto flex flex-row font-sans overscroll-none">
        <ul className="fixed w-400 p-5 text-xl font-medium leading-10 list-disc text-pink-500 uppercase">
          <li><Link to="/">核心概念</Link></li>
          <li><Link to="/senior-guidance">高级指引</Link></li>
        </ul>
        <div className="p-10 min-h-screen ml-40"></div>
        <Switch>
          <Route exact path="/" component={CoreConcept} />
          <Suspense fallback={<div>loading</div>}>
            <Route path="/senior-guidance" component={SeniorGuidance} />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
