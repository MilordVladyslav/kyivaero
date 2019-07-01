export default class FlightService {
  constructor(date) {
    this.date = date
  }
  __apiBase = `https://api.iev.aero/api/flights/`
  getFlights = async () => {
    const res = await fetch(`https://api.iev.aero/api/flights/${this.date}`);
    return res.json()
  }
}

