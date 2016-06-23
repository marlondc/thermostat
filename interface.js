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
  $('#psmon').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#PSM').text('ON');
  })
  $('#psmoff').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#PSM').text('OFF');
  })
  function updateTemperature(){
    $('#temperature').text(thermostat._temperature);
  }

})
