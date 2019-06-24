export default class FlightService {
  __apiBase = `https://api.iev.aero/api/flights/23-06-2019`
  getFlights = async () => {
    const res = await fetch(`https://api.iev.aero/api/flights/23-06-2019`);
    return res.json()
  }
}

