function contentReducer (state = {}, action) {
  switch(action.type) {
    case "ARRIVAL":
      console.log(action.value)
      return state
    case "DEPARTURE":
      const items = action.value.body.departure.filter((item) => {
        return item.codeShareData[0].airline.en.showOnSite
      })
      let filteredItems = []
      let airlineItems = []
      let flightItems = []
      for (let key in items) {
        const itemskey = items[key]
        for(let i = 0; i < items[key]['codeShareData'].length; i++) {
          airlineItems.push(
            items[key]['codeShareData'][i]['airline']['en']['name']
          )

          flightItems.push(
            items[key]['codeShareData'][i]['codeShare']
          )
        }
        filteredItems.push({
          term: items[key]['term'],
          timeDepShedule: items[key]['timeDepShedule'].slice(11, 16),
          destination: items[key]['airportToID.city_ru'],
          status: items[key]['status'],
          airline: airlineItems,
          flight: flightItems
        })
        flightItems = []
        airlineItems = []
      }
      return {
        filteredItems
      }
    case "YESTERDAY":
      return state
    case "TODAY":
      return state
    case "TOMORROW":
      return state
    case "SEARCH":
      return state
    default: {
      return state
    }
  }
}
export default contentReducer