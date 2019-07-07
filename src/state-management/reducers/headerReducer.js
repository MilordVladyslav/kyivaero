import initialState from '../initialState'
import {
    passengers,
    offersIev,
    vip,
    forPartners
  } from '../popupParams'
function headerReducer (state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_MENU_ITEM":
      const menuItemActive = action.value === state.header.menuItemActive ? '' : action.value
      return {
        ...state,
        header: {
          ...state.header,
          menuItemActive: menuItemActive ,
          popupInformation: popupInformation (menuItemActive)
        }
      }
    case "TOGGLE_LANGUAGE_ITEM":
      return {
        ...state,
        header: {
          ...state.header,
          languageItemActive: !state.header.languageItemActive
        }
      }
    case "SELECT_LANGUAGE":
    console.log(action.value)
    return {
      ...state,
      header: {
        ...state.header,
        currentLanguage: action.value
      }
    }
    default: {
      return state;
    }
  }
}

function popupInformation (menuItemActive) {
    switch (menuItemActive) {
      case "Пассажирам":
        return passengers
      case "Услуги IEV":
        return offersIev
      case "VIP":
        return vip
      case "Партнерам":
        return forPartners
      default: {
        return ''
      }
    }
}
export default headerReducer