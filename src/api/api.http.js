import apiConfing from './api.config';

class HttpService {

  constructor(host) {
    try {
      this.host = host || apiConfing.HOST;
    }
    catch (ex) {
      console.error("Unable to assign host", ex);
    }
  }

  createLink(url, params) {
    return `${this.host}/${url}/${this.buildQueryParams(params)}`;
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    return headers;
  }

  buildQueryParams(params) {
    return params ? '?' + Object.entries(params).map((pair) => pair.join('=')).join('&') : '';
  }

  request(url, options) {
    // const headers = this.getHeaders();
    const apiOptions = { ...options };
    console.log("API Options :", apiOptions);
    return new Promise((resolve, reject) => fetch(apiUrl, apiOptions)
      .then((res) => res.json())
      .then((response) => {
        debugger;
        const {
          status, data, statusCode, body
        } = response;

        if (status === "TRUE") {
          resolve(data);
        }

        if (status === 'FALSE') {
          reject(response);
        }

      }).catch((err) => reject(err)));
  }

  get(url, params) {
    const options = {
      method: 'GET',
    };
    const apiUrl = url + this.buildQueryParams(params);
    console.log(apiUrl);
    return this.request(apiUrl, options);
  }


}


export default HttpService;