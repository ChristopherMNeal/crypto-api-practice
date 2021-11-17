export default class CryptoService {
  static async getCrypto() {
    try {
      const response = await fetch(`https://api.nomics.com/v1/exchange-rates?key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}