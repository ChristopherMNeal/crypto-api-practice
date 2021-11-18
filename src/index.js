import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service';
import CalculateRate from './js/get-rate';

function getSelectionClass(response, currencyIndex) {
  return new CalculateRate(response[currencyIndex].price, response[currencyIndex],response[currencyIndex].high, response[currencyIndex].id, response[currencyIndex].rank, response[currencyIndex]["1d"].volume, response[currencyIndex].logo_url, response[currencyIndex].high_timestamp, $("#usdInputForm").val(), $('#currencies option:selected').val());
}

function getElements(response) {
  if (response) {
    const currencyIndex = $('#currencies option:selected').val();
    const selectedCurrency = getSelectionClass(response, currencyIndex);
    $('.showRate').html(selectedCurrency.getInfo());
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
    menuLoop(response);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

function menuLoop(response) {
  for (let i = 0; i < response.length; i++) {
    let item = (response[i].name);
    let menuItem = `<option value="${i}">${item}</option>`;
    $("#currencies").append(`${menuItem}`);
  }
}

getMenu();

$('#getRate').click(function() {
  makeApiCall();
});