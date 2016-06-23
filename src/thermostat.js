function Thermostat() {
  this._RESET_TEMPERATURE = 20;
  this._temperature = this._RESET_TEMPERATURE;
  this._MINIMUM_TEMPERATURE = 10;
  this._MAXIMUM_TEMPERATURE_PSM = 25;
  this._MAXIMUM_TEMPERATURE = 32;
  this.powerSavingMode = true;
  this._MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.currentTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()){
    return;
  }
  return this._temperature++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.isMinimumTemperature())
  {
    return this._MINIMUM_TEMPERATURE;
  }
  return this._temperature--;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temperature === this._MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.powerSavingMode === true){
    return this._temperature === this._MAXIMUM_TEMPERATURE_PSM;
  }
    return this._temperature === this._MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this._RESET_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if(this._temperature < this._MEDIUM_ENERGY_USAGE_LIMIT)
  {
    return 'low-usage';
  }
  else if (this._temperature >= this._MEDIUM_ENERGY_USAGE_LIMIT && this._temperature <= this._MAXIMUM_TEMPERATURE_PSM)
  {
    return 'medium-usage';
  }
  return 'high-usage';
};
