export default class CalculateRate {
  constructor(exchange, currencies, high, id, rank, oneDayVolume, logo){
    this.exchange = exchange;
    this.currencies = currencies;
    this.high = high;
    this.id = id;
    this.rank = rank;
    this.oneDayVolume = oneDayVolume;
    this.logo = logo;

  }

  calculateRate(usdAmount){
    return parseFloat((usdAmount / this.exchange).toFixed(9));
  }
  calculatePercent() {
    return parseFloat((this.exchange / this.high).toFixed(4)*100);
  }
}

