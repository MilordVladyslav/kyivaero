import React from 'react';
import 'reset-css'
import '../styles/index.scss'
import Header from './header'
import Content from './content/content'
import Footer from './footer'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
