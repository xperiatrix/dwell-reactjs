let baseURL = process.env.NODE_ENV === 'development' ? '/dwell-dev' : '/dwell';
var urljoin = require('url-join');

export default {
    baseURL: process.env.NODE_ENV === 'development' ? '/dwell-dev' : '/dwell',

    imagePlacehoder: './res/img/image-placeholder.png',    


    houseList: urljoin(baseURL, 'api/fetch/houses/list'),
}