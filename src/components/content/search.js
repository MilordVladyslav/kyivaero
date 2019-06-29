import React from 'react'
import {Route, Link} from 'react-router-dom'
import urlParamsMaker from '../../helpers/urlMaker'
class Search extends React.Component {
  state = {
    value: ''
  }
  urlParamsMaker = new urlParamsMaker()
  setValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.urlParamsMaker.addParam({
      search: this.state.value
    })
  }
  render () {
    return (
      <div className="search-block">
        <h1 className="title">Поиск рейса</h1>
        <div className="form-wrapper">
          <div className="magnifier"></div>
          <form method="GET" onSubmit={this.submitHandler} >
            <input type="text" className="search-input" placeholder="Город или номер рейса" onChange = {this.setValue}></input>
            <button type="submit" className="submit">Найти</button>
          </form>
        </div>
        <button><Link to={`/first/`}><p className="direction">first</p></Link></button>
      </div>
      )
  }
}

export default Search