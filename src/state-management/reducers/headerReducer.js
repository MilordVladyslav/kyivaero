import initialState from '../initialState'

function headerReducer (state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_MENU_ITEM":
      break;
    case "TOGGLE_LANGUAGE_ITEM":
      break;
    case "SELECT_LANGUAGE":
      break;
    default: {
      return state;
    }
  }
}