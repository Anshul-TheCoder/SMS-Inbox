import React from 'react';
import { Content } from './components/Content';
import './App.css';

function App() {
  let obj = [
    {
      id: 1,
      name: "Test 1",
      desc: "Content for list item 1",
      num: 13
    },
    {
      id: 2,
      name: "Test 2",
      desc: "Content for list item 2",
      num: 14
    },
    {
      id: 3,
      name: "Test 3",
      desc: "Content for list item 3",
      num: 15
    }
  ]
  return (
    <div className="container">
      <Content object={obj} />
    </div>
  );
}
export default App;
