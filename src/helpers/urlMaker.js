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
    // newParams[key].trim()
    let isExist = false
    let key = Object.keys(newParams)[0]
    let value = newParams[key]
    isExist = this.params.filter((value, index) => {
      return Object.keys(value)[0] === Object.keys(newParams)[0]
    })
    if(!isExist.length && newParams[key] && newParams[key].trim()) {
      for(let key in newParams) {
        this.params.push({
          [key]: newParams[key].trim()
        })
      }
    } else {
        let index = ''
        for(let i = 0; i < this.params.length; i++) {
          if(Object.keys(this.params[i])[0] === Object.keys(newParams)[0]) {
            index = i
          }
        }
        if(!newParams[key].length) {
          this.params.splice(index, 1)
        } else {
          this.params.splice(index, 1, {[key]: value.trim()})
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
    const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname
    const newUrl = baseUrl + this.urlParams
    window.history.pushState(null, null, newUrl);
    this.getParams = window.location.search
  }
}


export default UrlParamsMaker