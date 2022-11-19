function main() {    
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let erg = JSON.parse(this.responseText);
            
            document.getElementById('city').innerHTML = erg.city.name;
            
            for (let i = 0; i < 4; ++i) {
                let date = new Date(erg.list[i].dt * 1000);
                document.getElementById('erg').innerHTML += '<h2 class="date" onclick="changeToDetails(' + i + ')">' + date.toString().split(" ")[2] + '. ' + date.toString().split(" ")[1] + ' ' + date.toString().split(" ")[3] +'</h2>' +
                '<div id="container' + i + '" class="container">' +
                '<div class="littleContainer"><h3>Temperatur</h3><p style="color: yellow;">' + (erg.list[i].temp.day) + '°C</p></div>' +
                '<div class="littleContainer"><h3>' + erg.list[i].weather[0].main + '</h3><img src="http://openweathermap.org/img/wn/' + erg.list[i].weather[0].icon + '@2x.png"></div>' +
                '<div class="littleContainer"><h3>Feuchtigkeit</h3><p style="color: blue;">' + erg.list[i].humidity + '%</p></div>' +
                '<div class="littleContainer"><h3>Wind</h3><p>' + erg.list[i].speed + ' M/S</p><p>' + erg.list[0].deg + '°</p></div>' +
                '</div><hr>';

            }
        }
    };
    
    let url = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=48.19&lon=14.12&cnt=4&appid=958960235015309cce0245aa61d3149d&units=metric';
    xhttp.open('GET', url, true);
    xhttp.send();
}

function changeToDetails(index) {
    location.href = './detail/detail' + index + '.html';
}
