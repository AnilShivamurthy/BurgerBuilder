import React, { Component } from 'react';
import './App.css';
// import Counter from './Counter';
import Layout from './Component/Layout/Layout'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <Layout>
       <BurgerBuilder/>
     </Layout>
    </div>
  );
}

export default App;
