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
  console.log(date)
  console.log(nextAction)
  console.log(param)
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
  // return (dispatch) => {
  //     dispatch(itemsIsLoading(true));

  //     fetch(url)
  //         .then((response) => {
  //             if (!response.ok) {
  //                 throw Error(response.statusText);
  //             }

  //             dispatch(itemsIsLoading(false));

  //             return response;
  //         })
  //         .then((response) => response.json())
  //         .then((items) => dispatch(itemsFetchDataSuccess(items)))
  //         .catch(() => dispatch(itemsHasErrored(true)));
  // };

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


