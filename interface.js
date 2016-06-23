$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();


  $('#up').click(function(){
    thermostat.increaseTemperature();
    updateTemperature();
  })
  $('#down').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })
  $('#reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  })
  function updateTemperature(){
    $('#temperature').text(thermostat._temperature);
  }
})
