import React from 'react';
import Header from './components/Header';
import Card from './components/CardSubmit/Card/Card';
import List from './components/List/ListFetch';
import ListRender from './components/List/ListRender';
import './Main.css'

function App() {

  const items = List();
  

  return (
    <>

    <div className="listContainer">
    <Card/>
      <ul>
      {items.map(item => (<ListRender item = {item}/>))}
      </ul>
      </div>
    </>
  );
}

export default App;
