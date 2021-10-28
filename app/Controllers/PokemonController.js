import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

//private
function _drawPokeApiPokemon() {
    let pokemon = ProxyState.pokiApiPokemon
    let template = ``
    pokemon.forEach(p => template += p.Template)
    document.getElementById('poke-api-pokemon').innerHTML = template
}
function _drawActivePokemon() {
    let active = ProxyState.activePokemon
    document.getElementById('active-pokemon').innerHTML = `
     <div class="card-body" id="current-pokemon">
          <h4 class="card-title">${active.name.toUpperCase()}</h4>
          <div class="row">
            <div class="col-12 d-flex">
              <img class="justify-self-start"
                src="${active.img}" alt="" loading="lazy">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p><b>Height:</b>${active.height} | <b>Weight:</b>${active.weight}</p>
            </div>
            <div class="col-12">
                <p>${active.text}</p>
          </div>
        </div>
    
    
    `
}

export class PokemonController {
    constructor() {
        this.getPokiApiPokemon()
        ProxyState.on('pokiApiPokemon', _drawPokeApiPokemon)
        ProxyState.on('activePokemon', _drawActivePokemon)
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