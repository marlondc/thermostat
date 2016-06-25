$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();


    $('#up').click(function() {
        thermostat.increaseTemperature();
        updateTemperature();
    })
    $('#down').click(function() {
        thermostat.decreaseTemperature();
        updateTemperature();
    })
    $('#reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    })
    $('#psmon').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#PSM').text('ON');
        $('#PSM').attr('class', 'ON')
    })
    $('#psmoff').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#PSM').text('OFF');
        $('#PSM').attr('class', 'OFF');
    })
    $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
    })

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);
        })
    }

    function updateTemperature() {
        $('#temperature').text(thermostat._temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    }

})
