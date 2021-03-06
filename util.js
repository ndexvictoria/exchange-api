const rp = require('request-promise-native');
const md5 = require('js-md5');

const MARKET_URL = ""           // Market Url
const HEADER_DICT = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
    "Content-Type": "application/json;charset=utf-8",
    "Connection": "keep-alive"
}

function createTimestamp() {
    return new Date().getTime();
}

function httpGetNosign(url) {
    return httpRequest(url);
}

function httpPostSign(url, dic) {
    return httpRequest(url, dic);
}

async function httpRequest(url, data) {
    let response;
    if (data === undefined) {
        response = await rp(url);
    } else {
        let option = {
            method: 'POST',
            uri: url,
            body: data,
            header: HEADER_DICT,
            json: true
        }
        response = JSON.stringify(await rp(option));
    }
    return response;
}

exports.MARKET_URL = MARKET_URL;
exports.createTimestamp = createTimestamp;
exports.httpGetNosign = httpGetNosign;
exports.httpPostSign = httpPostSign;
exports.httpRequest = httpRequest;
exports.MARKET_URL = MARKET_URL;
exports.createTimestamp = createTimestamp;
exports.httpGetNosign = httpGetNosign;
exports.httpPostSign = httpPostSign;
exports.httpRequest = httpRequest;
