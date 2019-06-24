import React from 'react'

const Search = () => {
  return (
    <div className="search-block">
      <h1 className="title">Поиск рейса</h1>
      <div className="form-wrapper">
        <div className="magnifier"></div>
        <form>
          <input type="text" className="search-input" placeholder="Город или номер рейса"></input>
          <button type="submit" className="submit">Найти</button>
        </form>
      </div>
    </div>
  )
}

export default Search