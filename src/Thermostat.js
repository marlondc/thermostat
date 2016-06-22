'use strict';

function Thermostat() {
  this._powerSavingMode = true;
  this._DEFAULT_TEMP = 20;
  this._temperature = this._DEFAULT_TEMP;
  this._MINIMUM_TEMP = 10;
  this._PSM_ON_MAX_TEMP = 25;
  this._PSM_OFF_MAX_TEMP = 32;
  this._MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype = {
  getCurrentTemp: function() {
    return this._temperature;
  },

  upButton: function() {
    if(this.isMaximumTemp()) {
      return;
    };
    this._temperature += 1;
  },

  downButton: function() {
    if (this.isMinimumTemp()) {
      return;
    }
    this._temperature -= 1;
  },

  isMinimumTemp: function() {
    return this._temperature === this._MINIMUM_TEMP;
  },

  isMaximumTemp: function() {
    if (this._powerSavingMode === false) {
      return this._temperature === this._PSM_OFF_MAX_TEMP;
    }
    return this._temperature === this._PSM_ON_MAX_TEMP;
  },

  isPowerSavingModeOn: function() {
    return this._powerSavingMode;
  },

  switchOffPSM: function() {
    this._powerSavingMode = false;
  },

  switchOnPSM: function() {
    if (this._temperature > this._PSM_ON_MAX_TEMP) {
      this._temperature = this._PSM_ON_MAX_TEMP;
    }
    this._powerSavingMode = true;
  },

  resetTemp: function() {
    this._temperature = this._DEFAULT_TEMP;
  },

  energyUsage: function() {
    if (this._temperature < this._MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'green';
    }
    if (this._temperature < this._PSM_ON_MAX_TEMP) {
      return '#CCCC00';
    }
    return 'red';
  },
};
