describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it("Has a starting temperature of 20 degrees", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });
  it("Increases temperature when up button is pressed", function() {
    thermostat.increaseTemperature()
    expect(thermostat.currentTemperature()).toEqual(21);
  });
  it("Decreases temperature when up button is pressed", function() {
    thermostat.decreaseTemperature()
    expect(thermostat.currentTemperature()).toEqual(19);
  });
  it("has a minimum temperature of 10 degrees", function () {
    for(var i = 0; i< 11; i++)
    {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.currentTemperature()).toEqual(10);

  });

});
