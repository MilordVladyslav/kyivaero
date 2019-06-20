import React from 'react'
import logo from '../../images/logo.png'
import airtickets from '../../images/airtickets.jpg'
import Popup from './popup'
import {
  passengers,
  offersIev,
  vip,
  forPartners
} from './popupParams'

class Header extends React.Component {
  state = {
    menuItemActive: '',
    currentLanguage: 'EN',
    languageItemActive: false,
    languagesList: ['RU', 'EN', 'UA'],
    popupInformation: ''
  }
  menuItemActive (arg) {
    this.setState({
      menuItemActive: arg === this.state.menuItemActive ? '' : arg
    }, () => {
      this.popupInformation()
    })
  }

  isActiveMenuItem (arg) {
    if (this.state.menuItemActive === arg) {
      return arg === this.state.menuItemActive ? 'menu-item-active' : 'default'
    }
  }
  popupInformation () {
    console.log(this.state.menuItemActive)
      switch (this.state.menuItemActive) {
        case "Пассажирам":
        this.setState({
          popupInformation: passengers
        })
        break;
        case "Услуги IEV":
        this.setState({
          popupInformation: offersIev
        })
        break;
        case "VIP":
        this.setState({
          popupInformation: vip
        }, function () {
          console.log(this.state.popupInformation)
        }
        )
        break;
        case "Партнерам":
        this.setState({
          popupInformation: forPartners
        })
        break;
        default: {
          console.log('wow')
        }
      }
  }

  changeLanguage (lang) {
    this.setState({
      currentLanguage: lang,
      languageItemActive: false
    })
  }
  openLanguageList () {
    this.setState({
      languageItemActive: !this.state.languageItemActive
    })
  }

  render() {
    const languages = this.state.languagesList.map((lang, index) => {
      if(lang !== this.state.currentLanguage) {
        return (
          <li onClick={() => this.changeLanguage(lang)} key={index}>{lang}</li>
        )
      }
    })
    const menuItems = ['Пассажирам', 'Услуги IEV', "VIP", "Партнерам"].map((item, index) => {
      return (
        <li className={this.isActiveMenuItem(item)} onClick={() => this.menuItemActive(item)} key={index}>{item}</li>
      )
    })
    const headerClasses = this.state.menuItemActive ? 'header' : 'header shadow'
    const languageItems = this.state.languageItemActive ? 'language-select-active' : 'hided'
    const popup = this.state.popupInformation
      ? <Popup information = {this.state.popupInformation} menuItemActive = {this.state.menuItemActive}></Popup>
      : ''
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
              <div className="language" onClick={() => this.openLanguageList()}>
                <span className="currentLanguage">{this.state.currentLanguage}</span>
                <div className={languageItems}>
                  <ul>
                    {languages}
                  </ul>
                </div>
              </div>
            </div>
        </header>
        {popup}
      </div>
    )
  }
}

export default Header;