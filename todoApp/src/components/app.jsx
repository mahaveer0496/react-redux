import React from 'react';

// componenets
import Add_Todo_Form from './Add_Todo_Form';
import Todo_Items from './Todo_Items';
import Filter_Buttons from './Filter_Buttons';

const App = () =>
  <div className="container">
    <Add_Todo_Form />
    <Todo_Items />
    <Filter_Buttons />
    <div className="space"></div>
  </div>

export default App;

