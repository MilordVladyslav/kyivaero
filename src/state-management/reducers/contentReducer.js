import initialState from "../initialState";

function contentReducer (state = initialState, action) {
  let filteredItems = []
  let items = []
  switch(action.type) {
    case "ARRIVAL":
      if(!!action.value) {
        items = prepareItems (state.content.flights.arrival, 'timeArrShedule', 'airportFromID.name')
        items.forEach(object => {
          object['flight'].forEach(keyValue => {
            if(keyValue.toLowerCase().includes(action.value['search'].toLowerCase())) {
              filteredItems.push(object)
            }
          })
        });
      } else {
        filteredItems = prepareItems (state.content.flights.arrival, 'timeArrShedule', 'airportFromID.name')
      }
      return {
        ...state,
        filteredItems,
        mark: 'arrival'
      }
    case "DEPARTURE":
      if(!!action.value) {
        items = prepareItems (state.content.flights.departure, 'timeDepShedule', 'airportToID.name')
        items.forEach(object => {
          object['flight'].forEach(keyValue => {
            if(keyValue.toLowerCase().includes(action.value['search'].toLowerCase())) {
              filteredItems.push(object)
            }
          })
        });

      } else {
        filteredItems = prepareItems (state.content.flights.departure, 'timeDepShedule', 'airportToID.name')
      }
      return{
        ...state,
        filteredItems,
        mark: 'departure'
      }


    case "YESTERDAY":
      return state
    case "TODAY":
      return state
    case "TOMORROW":
      return state
    case "SEARCH":
      let mark = state.mark
      // filteredItems = [];
      // items = [];
      if(mark === 'departure') {
        items = prepareItems (state.content.flights.departure, 'timeDepShedule', 'airportToID.name')
        items.forEach(object => {
          object['flight'].forEach(keyValue => {
            if(keyValue.toLowerCase().includes(action.value['search'].toLowerCase())) {
              filteredItems.push(object)
            }
          })
        });
      } else if(mark === 'arrival') {
        items = prepareItems (state.content.flights.arrival, 'timeArrShedule', 'airportFromID.name')
        items.forEach(object => {
          object['flight'].forEach(keyValue => {
            if(keyValue.toLowerCase().includes(action.value['search'].toLowerCase())) {
              filteredItems.push(object)
            }
          })
        });
      }

      return{
        ...state,
        filteredItems
      }
    default: {
      return state
    }
  }
}


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


export default contentReducer