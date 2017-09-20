const yargs = require('yargs');
const weather = require('./weather');

yargs.options({
    city: {
        describe: 'city name',
        alias: 'c',
        demand: true,
        string: true
    }
}).help();

const city = encodeURIComponent(yargs.argv.c);
if (city.length === 0) {
    console.log('no city provided');
    return;
}

weather.getWeather(city).then( body => {
        console.log( body);
}, err =>{
    console.log('Error: ' + err);
});