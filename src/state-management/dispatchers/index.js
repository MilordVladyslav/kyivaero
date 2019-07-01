import {
  isActiveMenuItemActionCreator,
  toggleMenuItemActionCreator,
  itemsFetchData,
  toggleLanguageItemActionCreator,
  arrivalsActionCreator,
  searchActionCreator,
  selectLanguageItemActionCreator,
  departuresActionCreator
} from '../actionCreators'

const mapDispatchToContentProps = (dispatch) => (
  {
    getApiData: (direction, date, params) => (
      dispatch(itemsFetchData(direction, date, params))
    ),
    departures: (value) => (
      dispatch(departuresActionCreator(value))
    ),
    arrivals: (value) => (
      dispatch(arrivalsActionCreator(value))
    ),
    getFlightsWithParams: (value) => {
      dispatch(searchActionCreator(value))
    },
    dispatch: dispatch
  }
)

const mapStateToContentProps = (state) => {
  return {
    items: state.contentReducer.filteredItems,
    mark: state.contentReducer.mark
  }
}

const mapDispatchToHeaderProps = (dispatch) => (
  {
    isActiveMenuItem: (value) => (
      dispatch(isActiveMenuItemActionCreator(value))
    ),
    toggleMenuItem: (value) => (
      dispatch(toggleMenuItemActionCreator(value))
    ),
    toggleLanguagePopup: () => (
      dispatch(toggleLanguageItemActionCreator())
    ),
    selectLanguage: (value) => (
      dispatch(selectLanguageItemActionCreator(value))
    ),
    dispatch: dispatch
  }
)

const mapStateToHeaderProps = (state) => {
  const headerState = {
    ...state.headerReducer.header
  }
  return {
    headerState
  }
}

export {
  mapStateToHeaderProps,
  mapDispatchToHeaderProps,
  mapStateToContentProps,
  mapDispatchToContentProps
}