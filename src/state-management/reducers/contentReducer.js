function contentReducer (state = {}, action) {
  let filteredItems = null
  switch(action.type) {
    case "ARRIVAL":
      filteredItems = prepareItems (action.value.body.arrival, 'timeArrShedule', 'airportFromID.name')
      return {
        filteredItems
      }
    case "DEPARTURE":
      filteredItems = prepareItems (action.value.body.departure, 'timeDepShedule', 'airportToID.name')
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


function prepareItems (actionValue, time, airportName) {
  let items = []
  items = actionValue.filter((item) => {
    return item.codeShareData[0].airline.en.showOnSite
  })
  let filteredItems = []
  let airlineItems = []
  let flightItems = []
  for (let key in items) {
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
      [time]: items[key][time].slice(11, 16),
      destination: items[key][airportName],
      status: items[key]['status'],
      airline: airlineItems,
      flight: flightItems
    })
    flightItems = []
    airlineItems = []
  }
  return filteredItems
}


export default contentReducer