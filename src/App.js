import React from 'react';
import Nav from './components/meme_generator/NavComponent';
import Content from './components/meme_generator/BodyComponent';

export default function App() {
  const hello = <h2>Hello There</h2>
  console.log(hello);
  // Sample out data
//   {$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)
// key: null
// props: {children: 'Hello There'}
// ref: null
// type: "h2"
// _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
// _store: {validated: false}
// _self: undefined
// _source: {fileName: '/Users/mac/VscodeProjects/react2022/fcc_react2022/src/App.js', lineNumber: 9, columnNumber: 17}
// [[Prototype]]: Object

  return (
    <div className="container">
      <Nav />
      <Content image="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg"/>
    </div>
  );
}
