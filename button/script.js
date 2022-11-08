let currentPokemon = 1;
loadPokemon();

function nextPokemon() {
    ++currentPokemon;

    if (currentPokemon == 905) {
        currentPokemon = 10001;
    }

    loadPokemon();
}

function previousPokemon() {
    if (currentPokemon == 10001) {
        currentPokemon = 904;
    } else {
        --currentPokemon;
    }

    if (currentPokemon < 1) {
        currentPokemon = 1;
    }
    loadPokemon();
}

function loadPokemon() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            console.log('Juhu, die antwort ist da');
            let pokemon = JSON.parse(this.responseText);
            document.getElementById('erg').innerHTML =
                '<h2 style="text-transform: capitalize;">' + pokemon.name + '</h2>' +
                '<p>' + (pokemon.weight / 10) + ' kg schwer</p>' +
                '<p>Typ: ' + pokemon.types[0].type.name + '</p>' +
                '<img src="' + pokemon.sprites.front_shiny + '" alt="" width="200">'
        }
    };

    xhttp.open('GET', "https://pokeapi.co/api/v2/pokemon/" + currentPokemon + "", true);

    xhttp.send();
}