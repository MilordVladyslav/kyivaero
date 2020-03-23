export default class FlightService {
  constructor(date) {
    this.date = date
  }
  __apiBase = `https://api.iev.aero/api/flights/` // урли зберігаються в константах або в .env
  getFlights = async () => {
    const res = await fetch(`https://api.iev.aero/api/flights/${this.date}`); // замість сервіса можна винести в хелпери
    return res.json()
  }
}

