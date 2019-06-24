import FlightService from '../../service/service'
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

function itemsFetchData() {
  const flightService = new FlightService()
  return (dispatch) => {
    flightService
    .getFlights()
    .then(res => {
      dispatch(departuresActionCreator(res))
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