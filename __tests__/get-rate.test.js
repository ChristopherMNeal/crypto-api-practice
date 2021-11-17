import CalculateRate from "../src/js/get-rate";

describe('CalculateRate', ()=> {

  test('it should return the exhange in usd', ()=> {
    const newCalculateRate = new CalculateRate(1, "USD");
    expect(newCalculateRate.exchange).toEqual(1);
  });
});