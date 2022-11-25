function main(dayNumber) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let erg = JSON.parse(this.responseText);

            console.log(erg);
            let startingNumber = getStartingHour(dayNumber);

            document.getElementById('title').innerHTML = (erg.list[startingNumber].dt_txt).split(" ")[0];
            let date = new Date(erg.list[startingNumber].dt * 1000);
            document.getElementById('city').innerHTML = erg.city.name;

            document.getElementById('erg').innerHTML = '<h2 class="date" onclick="changeSite()">' + date.toString().split(" ")[0] + ' ' + (erg.list[startingNumber].dt_txt).split(" ")[0] + '</h2>' +
                '<div class="container">' +
                '<div class="littleContainer"><h3>Temperatur</h3><p style="color: yellow;">' + erg.list[startingNumber].main.temp + '°C</p><p>max. Temp: ' + erg.list[startingNumber].main.temp_max + '°C</p><p>min. Temp: ' + erg.list[startingNumber].main.temp_min + '°C</p></div>' +
                '<div class="littleContainer"><h3>' + erg.list[startingNumber].weather[0].main + '</h3><img src="https://openweathermap.org/img/wn/' + erg.list[startingNumber].weather[0].icon + '@2x.png" style="margin-top: -1vh;" alt="weatherIcon"><p>' + erg.list[startingNumber].weather[0].description + '</p></div>' +
                '<div class="littleContainer"><h3>Feuchtigkeit</h3><p style="color: blue;">' + erg.list[startingNumber].main.humidity + '%</p></div>' +
                '<div class="littleContainer"><h3>Wind</h3><p>' + erg.list[startingNumber].wind.speed + ' M/S</p><p>' + erg.list[startingNumber].wind.deg + '°</p></div></div>' +
                '<h3 id="weitDet">weitere Details</h3><div class="container">' +
                '<p>Regen-wkt: ' + (erg.list[startingNumber].pop * 100).toFixed(2) + '%</p>' +
                '<p>Wolkenbedeckt: ' + erg.list[startingNumber].clouds.all + '%</p><p>gefühlte Temperatur: ' + erg.list[dayNumber].main.feels_like + '°C</p></div><hr>'

            for (let i = 0; i < 24; ++i) {
                document.getElementById('hourlyDetails').innerHTML += '<div class="hourlyHours"><h4>' + (erg.list[startingNumber + i].dt_txt).split(" ")[1].split(":")[0] + 'h</h4><p>' + erg.list[startingNumber + i].main.temp + '°C</p><p>Regen: ' + (erg.list[startingNumber + i].pop * 100).toFixed(2) + '%</p><img src="https://openweathermap.org/img/wn/' + erg.list[startingNumber + i].weather[0].icon + '@2x.png" style="margin-top: -1vh;" alt="weatherIcon"></div>';
            }
        }
    };

    let url = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=48.19&lon=14.12&appid=958960235015309cce0245aa61d3149d&units=metric';
    xhttp.open('GET', url, true);
    xhttp.send();
}

function changeSite() {
    location.href = '../index.html';
}

function getStartingHour(dayNumber) {
    if (dayNumber == 0) {
        return 0;
    } else {
        return 24 * dayNumber;
    }
}
