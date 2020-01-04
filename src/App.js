import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Users from './Pages/Users';
import './App.scss';
import Info from './Pages/Info';
import Account from './Pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <div className="content mb-0">
        <Route path="/" exact component={Home}></Route>
        <Route path="/chat" component={Chat}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/info" component={Info}></Route>
        <Route path="/account" component={Account}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
