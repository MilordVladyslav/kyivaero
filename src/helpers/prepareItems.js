function prepareItems (actionValue, time, airportName) {
  let items = []

  items = actionValue.filter((item, index) => {
    try {
      return item.codeShareData[0].airline.en.showOnSite
    }
    catch(err) {
      return false
    }
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

export default prepareItems