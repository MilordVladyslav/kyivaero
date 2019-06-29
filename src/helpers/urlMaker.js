class UrlParamsMaker {
  constructor() {
    this.urlParams = ''
    this.params = []
    this.getParams = ''
  }
  addParam = (newParams = {}) => {
    this.model(newParams)
    this.view()

  }
  model = (newParams) => {
    let isExist = false
    let key = ''
    let value = ''
    isExist = this.params.filter((value, index) => {
      return Object.keys(value)[0] === Object.keys(newParams)[0]
    })
    if(!isExist.length) {
      for(let key in newParams) {
        this.params.push({
          [key]: newParams[key]
        })
      }
    } else {
      key = Object.keys(newParams)[0]
      value = newParams[key]
      let index = ''
      for(let i = 0; i < this.params.length; i++) {
        if(Object.keys(this.params[i])[0] === Object.keys(newParams)[0]) {
          index = i
        }
      }
      if(!newParams[key].length) {
        this.params.splice(index, 1)
      } else {
        this.params.splice(index, 1, {[key]: value})
        console.log(this.params)
      }
    }
  }
  view = () => {
    this.urlParams = ''
    for(let i = 0; i < this.params.length; i++) {
      for(let key in this.params[i]) {
        this.urlParams += i === 0
          ? `?${key}=${this.params[i][key]}`
          : `&${key}=${this.params[i][key]}`
      }
    }
    console.log(this.urlParams)
    const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname
    const newUrl = baseUrl + this.urlParams
    window.history.pushState(null, null, newUrl);
    this.getParams = window.location.search
    console.log(this.getParams)
  }
}


export default UrlParamsMaker