import React from 'react';
import 'reset-css'
import '../styles/index.scss'
// import Content from './content/content'
import Footer from './footer'

import { HeaderHoc, ContentHoc } from '../hoc/'
// import FlightService from '../service/service.js'
// class UrlParamsMaker {
//   constructor(urlParams) {
//     this.urlParams = urlParams
//   }
// }
class App extends React.Component {
  // urlParamsMaker = new UrlParamsMaker('hello')
  render () {
    // console.log(this.urlParamsMaker.urlParams)
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
