import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

//private
function _drawPokeApiPokemon() {
    let pokemon = ProxyState.pokiApiPokemon
    let template = ``
    pokemon.forEach(p => template += p.Template)
    document.getElementById('poke-api-pokemon').innerHTML = template
}

export class PokemonController {
    constructor() {
        this.getPokiApiPokemon()
        ProxyState.on('pokiApiPokemon', _drawPokeApiPokemon)
    }


    async setActive(name) {
        try {
            await pokemonService.setActive(name)
        } catch (error) {
            console.error(error.message)
        }

    }

    async getPokiApiPokemon() {
        try {
            await pokemonService.getPokeApiPokemon()
        } catch (error) {
            console.error(error.message)
        }
    }
}