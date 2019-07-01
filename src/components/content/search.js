import React from 'react'
import {Link} from 'react-router-dom'
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
    this.props.urlParamsMaker.addParam({
      search: this.state.value
    })
    this.props.getContentWithParams(
      [
        this.props.urlParamsMaker.params,
        this.props.urlParamsMaker.urlParams
      ]
    )
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
      </div>
      )
  }
}

export default Search