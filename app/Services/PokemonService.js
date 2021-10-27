import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { pokeApi } from "./AxiosService.js"



class PokemonService {
    async getPokeApiPokemon() {
        const res = await pokeApi.get('pokemon')
        console.log(res)
        let pokemon = res.data.results.map(p => new PokeApiPokemon(p))
        ProxyState.pokiApiPokemon = pokemon
    }

    async setActive(name) {
        const res = await pokeApi.get('/pokemon' + name)
        console.log(res.data)
        const text = await pokeApi.get('/pokemon-species/' + res.data.results.id)
        let pokemon = new PokeApiPokemon(res.data.results, text)
        ProxyState.activePokemon = pokemon
    }
}

export const pokemonService = new PokemonService()