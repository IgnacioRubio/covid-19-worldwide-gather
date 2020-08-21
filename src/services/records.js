const superagent = require('superagent');


const URI_ECDC_DATA = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/';


// 
exports.getCovidData = async () => {
  const res = await superagent.get('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/');

  return res.body.records;
}