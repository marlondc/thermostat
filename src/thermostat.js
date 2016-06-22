function Thermostat() {
  this._startingTemperature = 20;
  this._MINIMUM_TEMPERATURE = 10;
}

Thermostat.prototype.currentTemperature = function(){
  return this._startingTemperature
};

Thermostat.prototype.increaseTemperature = function(){

  return this._startingTemperature++;
};

Thermostat.prototype.decreaseTemperature = function(){
  // if(this._startingTemperature === this._MINIMUM_TEMPERATURE)
  if(this.isMinimumTemperature())
  {
    return this._MINIMUM_TEMPERATURE;
  }
  return this._startingTemperature--;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._startingTemperature === this._MINIMUM_TEMPERATURE;
};
