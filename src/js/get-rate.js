export default class CalculateRate {
  constructor(exchange, currencies){
    this.exchange = exchange;
    this.currencies = currencies;
  }

  calculateRate(usdAmount){
    return (usdAmount / this.exchange);
  }
}