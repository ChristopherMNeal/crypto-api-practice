import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service';

function getElements(response) {
  if (response) {
    $('.showRate').text(`The rate is ${response[24].rate} USD to one ${response[24].currency}`);
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
  makeApiCall();
});

/*
show exchange rate
calculate between currencies
  usd -> btc
  btc -> usd
  etc

all currencies in dropdowns to compare

use class with static method
use async and await function
*/