import React from 'react';
import 'reset-css'
import '../styles/index.scss'
// import Content from './content/content'
import Footer from './footer'
import store from '../state-management/store'
import { Provider } from 'react-redux';
import { HeaderHoc, ContentHoc } from '../hoc/'
// import FlightService from '../service/service.js'
function App() {
  // const myFlights = new FlightService();

  // myFlights.getFlights()
  //   .then((res) => {
  //     console.log(res.body)
  //     console.log(res.departure[0].term)
  //     console.log(res.departure[0].timeDepShedule)
  //     console.log(res.departure[0]['airportToID.name'])
  //     let lol = Object.assign(res.body.departure[0], {})
  //     for (let key in lol) {
  //       console.log ('key ' + key + ' value ' + lol[key])
  //     }

  //   })

  return (
    <div className="App">
      <HeaderHoc></HeaderHoc>
      <ContentHoc></ContentHoc>
      <Footer></Footer>
    </div>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default WrappedApp;
