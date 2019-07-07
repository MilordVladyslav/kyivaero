import FlightService from '../../service/service'
import initialState from '../initialState'
function toggleMenuItemActionCreator (value) {
  return {
    type: 'TOGGLE_MENU_ITEM',
    value
  }
}
function isActiveMenuItemActionCreator (value) {
  return {
    type: 'IS_ACTIVE_MENU_ITEM',
    value
  }
}

function toggleLanguageItemActionCreator (value) {
  return {
    type: 'TOGGLE_LANGUAGE_ITEM',
    value
  }
}

function selectLanguageItemActionCreator (value) {
  return {
    type: 'SELECT_LANGUAGE',
    value
  }
}

function arrivalsActionCreator (value) {
  return {
    type: 'ARRIVAL',
    value
  }
}

function departuresActionCreator (value) {
  return {
    type: 'DEPARTURE',
    value
  }
}

function yesterdayActionCreator (value) {
  return {
    type: 'YESTERDAY',
    value
  }
}

function todayActionCreator (value) {
  return {
    type: 'TODAY',
    value
  }
}

function tomorrowActionCreator (value) {
  return {
    type: 'TOMORROW',
    value
  }
}

function searchActionCreator (value) {
  return {
    type: 'SEARCH',
    value
  }
}

function itemsFetchData(nextAction, date, param) {
  const flightService = new FlightService(date)
  return (dispatch) => {
    flightService
    .getFlights()
    .then(res => {
      initialState.content.flights = res.body
      if(nextAction === 'departure') {
        dispatch(departuresActionCreator(param))
      } else {
        dispatch(arrivalsActionCreator(param))
      }
    })
  }
}

export {
  itemsFetchData,
  isActiveMenuItemActionCreator,
  toggleMenuItemActionCreator,
  toggleLanguageItemActionCreator,
  arrivalsActionCreator,
  departuresActionCreator,
  yesterdayActionCreator,
  todayActionCreator,
  tomorrowActionCreator,
  searchActionCreator,
  selectLanguageItemActionCreator
}


