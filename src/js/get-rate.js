export default class CalculateRate {
  constructor(exchange, currencies, high, id, rank, oneDayVolume, logo, hightime, usdAmount, index){
    this.exchange = exchange;
    this.currencies = currencies;
    this.high = high;
    this.id = id;
    this.rank = rank;
    this.oneDayVolume = oneDayVolume;
    this.logo = logo;
    this.hightime = hightime;
    this.usdAmount = usdAmount;
    this.index = index;
  }

  calculateRate(usdAmount){
    return parseFloat((usdAmount / this.exchange).toFixed(9));
  }
  calculatePercent() {
    return parseFloat((this.exchange / this.high).toFixed(4)*100);
  }
  getInfo() {
    return `The rate is ${this.exchange} ${this.id} to 1 USD<br>$ ${this.usdAmount} USD = ${this.calculateRate(this.usdAmount)} in <img src= "${this.logo}" width= "30">${this.id} <br>All time high price was ${this.high} on ${this.hightime}.<br>Current price is ${this.calculatePercent()}% of that.<br>This is the rank of the crypto: ${this.rank}<br>The volume over the last day was ${this.oneDayVolume}`;
  }
}