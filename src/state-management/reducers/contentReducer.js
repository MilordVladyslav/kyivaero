import initialState from "../initialState";
import prepareItems from '../../helpers/prepareItems'
function contentReducer (state = initialState, action) {
  let filteredItems = []
  let items = []
  switch(action.type) {
    case "ARRIVAL":
      if(!!action.value) {
        items = prepareItems (state.content.flights.arrival, 'timeArrShedule', 'airportFromID.name')
        items.forEach(object => {
          if(object['destination'].toLowerCase().includes(action.value['search'].toLowerCase())) {
            filteredItems.push(object)
          }
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
          if(object['destination'].toLowerCase().includes(action.value['search'].toLowerCase())) {
            filteredItems.push(object)
          }
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
      if(mark === 'departure') {
        items = prepareItems (state.content.flights.departure, 'timeDepShedule', 'airportToID.name')
        items.forEach(object => {
          if(object['destination'].toLowerCase().includes(action.value['search'].toLowerCase())) {
            filteredItems.push(object)
          }
          object['flight'].forEach(keyValue => {
            if(keyValue.toLowerCase().includes(action.value['search'].toLowerCase())) {
              filteredItems.push(object)
            }
          })
        });
      } else if(mark === 'arrival') {
        items = prepareItems (state.content.flights.arrival, 'timeArrShedule', 'airportFromID.name')
        items.forEach(object => {
          if(object['destination'].toLowerCase().includes(action.value['search'].toLowerCase())) {
            filteredItems.push(object)
          }
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





export default contentReducer