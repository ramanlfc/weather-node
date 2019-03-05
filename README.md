# weather-node

Demo node weather app, made with request and yargs.

Run ```npm install``` to install all the dependencies in _**package.json**_.

```js
node app.js -c=cityname
```

returns a javascript object as response containing the weather info.

#### example:

```js
node app.js -c=delhi
```

Response:

```js
{ coord: { lon: 77.22, lat: 28.67 },
  weather: [ { id: 721, main: 'Haze', description: 'haze', icon: '50d' } ],
  base: 'stations',
  main: 
   { temp: 35.02,
     pressure: 1001,
     humidity: 46,
     temp_min: 34,
     temp_max: 36 },
  visibility: 3000,
  wind: { speed: 2.6, deg: 340 },
  clouds: { all: 20 },
  dt: 1505908800,
  sys: 
   { type: 1,
     id: 7808,
     message: 0.0302,
     country: 'IN',
     sunrise: 1505867924,
     sunset: 1505911774 },
  id: 1273294,
  name: 'Delhi',
  cod: 200 }
```



