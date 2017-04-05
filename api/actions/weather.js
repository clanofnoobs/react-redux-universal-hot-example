const rp = require("request-promise");
let APP_ID = "b1b15e88fa797225412429c1c50c122a1"

export function getTemp(req) {
  return new Promise(function(resolve, reject){
    var ZIP = req.query.zip;

    let API_REQ = `http://samples.openweathermap.org/data/2.5/weather?zip=${ZIP},us&appid=${APP_ID}`
    var options = {
      uri: API_REQ,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    };

    rp(options)
      .then((json) => {
        resolve(json);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

export default function weather(req) {
  return new Promise((resolve) => {
    getTemp(req).then(function(temp){
      console.log(temp.main);
      resolve(temp.main.temp);
    }).catch(function(err) {
      resolve();
    })
  });
}
