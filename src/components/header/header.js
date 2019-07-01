import React from 'react'
import logo from '../../images/logo.png'
import Popup from './popup'
class Header extends React.Component {

  isActiveMenuItem (arg) {
      return arg === this.props.headerState.menuItemActive ? 'menu-item-active' : 'default'
  }
  changeLanguage = (lang) => {
    this.props.selectLanguage(lang)
  }

  render() {
    const languages = this.props.headerState.languagesList.map((lang, index) => {
      if(lang !== this.props.headerState.currentLanguage) {
        return (
          <li onClick={() => this.changeLanguage(lang)} key={index}>{lang}</li>
        )
      }
    })
    const menuItems = ['Пассажирам', 'Услуги IEV', "VIP", "Партнерам"].map((item, index) => {
      return (
        <li className={this.isActiveMenuItem(item)} onClick={() => this.props.toggleMenuItem(item)} key={index}>{item}</li>
      )
    })
    const headerClasses = this.props.headerState.menuItemActive ? 'header' : 'header shadow'
    const languageItems = this.props.headerState.languageItemActive ? 'language-select-active' : 'hided'
    return (
      <div>
        <header className={headerClasses}>
            <div className="logo">
              <a href="/"><img src={logo} alt=""></img></a>
            </div>
            <div className="menu-language">
              <div className="menu">
                <ul>
                  {menuItems}
                </ul>
              </div>
              <div className="language" onClick={() => this.props.toggleLanguagePopup()}>
                <span className="currentLanguage">{this.props.headerState.currentLanguage}</span>
                <div className={languageItems}>
                  <ul>
                    {languages}
                  </ul>
                </div>
              </div>
            </div>
        </header>
        {<Popup information = {this.props.headerState.popupInformation} menuItemActive = {this.props.headerState.menuItemActive} ></Popup>}
      </div>
    )
  }
}

export default Header;