const convertToCelsius = function(tempF) {

  if (tempF == 32){
    return 0;
  }
  else

  return convertedTemp = Math.round((tempF - 32) * (5/9)*10) / 10;

};

const convertToFahrenheit = function(tempC) {

  if(tempC == 0){
    return 32;
  }
  else
  
  return convertedTemp = Math.round((tempC * 9/5 + 32)*10)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
