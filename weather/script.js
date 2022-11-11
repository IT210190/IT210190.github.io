let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let erg = JSON.parse(this.responseText);

        console.log(erg);

        document.getElementById('city').innerHTML = erg.city.name;

        for (let i = 0; i < 5; ++i) {
            document.getElementById('erg').innerHTML += '<h2>' + (erg.list[i * 8].dt_txt).split(" ")[0] + '</h2>' +
                '<div id="container">' +
                '<div class="littleContainer"><h3>Temperatur</h3><p style="color: yellow;">' + (erg.list[i * 8].main.temp - 273.15).toFixed(1) + '°C</p></div>' +
                '<div class="littleContainer"><h3>' + erg.list[i * 8].weather[0].main + '</h3><img src="http://openweathermap.org/img/wn/' + erg.list[i * 8].weather[0].icon + '@2x.png"></div>' +
                '<div class="littleContainer"><h3>Feuchtigkeit</h3><p style="color: blue;">' + erg.list[i * 8].main.humidity + '%</p></div>' +
                '<div class="littleContainer"><h3>Wind</h3><p>' + erg.list[i * 8].wind.speed + ' M/S</p><p>' + erg.list[0].wind.deg + '°</p></div>' +
                '</div><hr>'
        }
    }
};

let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Marchtrenk,at&APPID=958960235015309cce0245aa61d3149d';
xhttp.open('GET', url, true);
xhttp.send();