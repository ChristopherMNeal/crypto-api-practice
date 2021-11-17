import CalculateRate from "../src/js/get-rate";

describe('CalculateRate', ()=> {

  test('it should return the exhange in usd', ()=> {
    const newCalculateRate = new CalculateRate(1, "USD");
    expect(newCalculateRate.exchange).toEqual(1);
  });

  test('it should convert us dollars to us dollars', ()=> {
    const newCalculateRate = new CalculateRate(1 , "USD");
    const outcome = newCalculateRate.calculateRate(1);
    expect(outcome).toEqual(1);
  });


  test('it should convert us dollars to euros', ()=> {
    const newCalulateRate = new CalculateRate(1.13199004, "EUR");
    const outcome = newCalulateRate.calculateRate(5);
    expect(outcome).toEqual(4.416999994);
  });

  test('it should calculate current price as percent of all time high', ()=> {
    const newCalulateRate = new CalculateRate(1.1, "EUR", 1.5);
    const outcome = newCalulateRate.calculatePercent();
    expect(outcome).toEqual(73.33);
  });
});

