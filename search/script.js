loadPokemon();

function loadPokemon() {
    let pokeName = document.getElementById('pokemonName').value;

    if (pokeName != "") {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                console.log('Juhu, die antwort ist da');
                let pokemon = JSON.parse(this.responseText);
                console.log(pokemon);
                console.log(pokemon.name);
                console.log(pokemon.weight);
                console.log(pokemon.types[0].type.name);
                console.log(pokemon.sprites.front_shiny);
                document.getElementById('erg').innerHTML =
                    '<h2 style="text-transform: capitalize;">' + pokemon.name + '</h2>' +
                    '<p>' + (pokemon.weight / 10) + ' kg schwer</p>' +
                    '<p>Typ: ' + pokemon.types[0].type.name + '</p>' +
                    '<img src="' + pokemon.sprites.front_shiny + '" alt="" width="200">'
            }
        };

        xhttp.open('GET', "https://pokeapi.co/api/v2/pokemon/" + pokeName + "", true);

        xhttp.send();
    } else {
        document.getElementById('erg').innerHTML = 'Bitte einen Namen oder Index eingeben.';
    }
}