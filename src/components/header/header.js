import React from 'react'
import logo from '../../images/logo.png'
import Popup from './popup'
import MobilePopup from './mobilePopup'
import DetailsPopup from './detailsPopup'
class Header extends React.Component {

  state = {
    mobileMenu: false,
    detailsPopup: false
  }
  isActiveMenuItem (arg) {
      return arg === this.props.headerState.menuItemActive ? 'menu-item-active' : 'default'
  }
  changeLanguage = (lang) => {
    this.props.selectLanguage(lang)
  }

  details = (arg) => {
    this.setState({
      detailsPopup: arg
    })
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenu: !this.state.mobileMenu,
      detailsPopup: false
    })
  }
  closeDetailsPopup = () => {
    this.setState({
      detailsPopup: false
    })
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
    const mobilePopupClasses = this.state.mobileMenu ? 'mobile-popup mobile-popup-open' : 'mobile-popup'
    const menuItem = this.state.mobileMenu ? 'menu__item--hamburger menu-item-open' : 'menu__item--hamburger'
    const detailsPopup = this.state.detailsPopup && this.state.mobileMenu? 'details-popup details-popup-open' : 'details-popup'
    return (
      <div>
        <header className={headerClasses}>
            <div className="logo">
              <a href="/"><img src={logo} alt=""></img></a>
            </div>
            <div className="menu__wrapper" onClick={this.toggleMobileMenu}>
                <div className={menuItem} tabIndex="1">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
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
        <div className={mobilePopupClasses}>
          <div className="languages">
            <p><a href="/">ua</a></p>
            <p><a href="/">ru</a></p>
            <p><a href="/">en</a></p>
          </div>
          <DetailsPopup detailsPopup ={detailsPopup} detailsPopupItems = {this.state.detailsPopup} closeDetailsPopup = {this.closeDetailsPopup}></DetailsPopup>
          <MobilePopup details={this.details}></MobilePopup>
        </div>
      </div>
    )
  }
}

export default Header;