import React from 'react'
import passengers from '../../images/passengers.svg'
import offers from '../../images/offers.svg'
import vip from '../../images/vip.svg'
import partners from '../../images/partners.svg'

const MobilePopup = (props) => (
  <div className="offers">
  <div className="offer" onClick={() => props.details('passengers')}>
    <img src={passengers} alt=""></img>
    <p>Пассажирам</p>
  </div>
  <div className="offer" onClick={() => props.details('IEV')}>
    <img src={offers} alt=""></img>
    <p>Услуги IEV</p>
  </div>
  <div className="offer" onClick={() => props.details('VIP')}>
    <img src={vip} alt=""></img>
    <p>VIP</p>
  </div>
  <div className="offer" onClick={() => props.details('partners')}>
    <img src={partners} alt=""></img>
    <p>Партнерам</p>
  </div>
</div>
)

export default MobilePopup