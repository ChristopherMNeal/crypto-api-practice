import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service';
import CalculateRate from './js/get-rate';

function getElements(response) {
  if (response) {
    const currencyIndex = $('#currencies option:selected').val();
    const selectedCurrency = new CalculateRate(response[currencyIndex].rate, response[currencyIndex].currency);
    const usdAmount = $("#usdInputForm").val();
    const convertedAmount = selectedCurrency.calculateRate(usdAmount);
    $('.showRate').html(`The rate is ${selectedCurrency.exchange} ${selectedCurrency.currencies} to 1 USD<br>$ ${usdAmount} USD = ${convertedAmount} in ${selectedCurrency.currencies}`);
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
      let item = (response[i].currency);
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