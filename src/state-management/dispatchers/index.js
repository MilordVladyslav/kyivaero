import {
  isActiveMenuItemActionCreator,
  toggleMenuItemActionCreator,
  itemsFetchData,
  toggleLanguageItemActionCreator,
  arrivalsActionCreator,
  // departuresActionCreator,
  selectLanguageItemActionCreator
} from '../actionCreators'

const mapDispatchToContentProps = (dispatch) => (
  {
    getApiData: (value) => (
      // dispatch(departuresActionCreator(value))
      dispatch(itemsFetchData(value))
    ),
    dispatch: dispatch
  }
)

const mapStateToContentProps = (state) => {
  return {
    items: state.contentReducer.filteredItems
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