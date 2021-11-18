import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service';
import CalculateRate from './js/get-rate';

function getSelectionClass(response, currencyIndex) {
  return new CalculateRate(response[currencyIndex].price, response[currencyIndex],response[currencyIndex].high, response[currencyIndex].id, response[currencyIndex].rank, response[currencyIndex]["1d"].volume, response[currencyIndex].logo_url, response[currencyIndex].high_timestamp);
}

function getElements(response) {
  if (response) {
    const currencyIndex = $('#currencies option:selected').val();
    const selectedCurrency = getSelectionClass(response, currencyIndex);
    const usdAmount = $("#usdInputForm").val();
    const convertedAmount = selectedCurrency.calculateRate(usdAmount);
    const percentOfHigh = selectedCurrency.calculatePercent();
    $('.showRate').html(`The rate is ${selectedCurrency.exchange} ${selectedCurrency.id} to 1 USD<br>$ ${usdAmount} USD = ${convertedAmount} in <img src= "${selectedCurrency.logo}" width= "30">${selectedCurrency.id} <br>All time high price was ${selectedCurrency.high} on ${selectedCurrency.hightime}.<br>Current price is ${percentOfHigh}% of that.<br>This is the rank of the crypto: ${selectedCurrency.rank}<br>The volume over the last day was ${selectedCurrency.oneDayVolume}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CryptoService.getCrypto();
  getElements(response);
}

async function getMenu() {
  const response = await CryptoService.getCrypto();
  if (response) {
    for (let i = 0; i < response.length; i++) {
      let item = (response[i].name);
      let menuItem = `<option value="${i}">${item}</option>`;
      $("#currencies").append(`${menuItem}`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

getMenu();

$('#getRate').click(function() {
// let currencyIndex = $('#currencies option:selected').val();

  makeApiCall();
});


