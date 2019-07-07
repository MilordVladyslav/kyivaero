import React from 'react';
import 'reset-css'
import '../styles/index.scss'
import Footer from './footer'
import { HeaderHoc, ContentHoc } from '../hoc/'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <HeaderHoc></HeaderHoc>
        <ContentHoc></ContentHoc>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
