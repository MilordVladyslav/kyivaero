function toggleMenuItemActionCreator (value) {
  return {
    type: 'TOGGLE_MENU_ITEM',
    formValue: value
  }
}

function toggleLanguageItemActionCreator (value) {
  return {
    type: 'TOGGLE_LANGUAGE_ITEM',
    formValue: value
  }
}

function selectLanguageItemActionCreator (value) {
  return {
    type: 'SELECT_LANGUAGE',
    formValue: value
  }
}

export {
  toggleMenuItemActionCreator,
  toggleLanguageItemActionCreator,
  selectLanguageItemActionCreator
}