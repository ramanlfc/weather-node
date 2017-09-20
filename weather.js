const request = require('request');

const getWeather = city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
    return new Promise((resolve, reject) => {
        request({
            url,
            json: true
        }, (err, response, body) => {
            if (err)
                reject(err);
            else
                resolve(body);
        });// end request
    });

};

/*
const getWeather = (city, cb) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;

    request({
        url,
        json: true
    }, (err, response, body) => {
        if (err)
            cb(err);
        else
            cb(undefined, body);
    });// end request
};
*/

module.exports = {
    getWeather
}