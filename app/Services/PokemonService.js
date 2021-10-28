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
        const res = await pokeApi.get('pokemon/' + name)
        console.log(res.data)
        const textsrc = await pokeApi.get('/pokemon-species/' + res.data.id)
        console.log(textsrc)
        const text = textsrc.data.flavor_text_entries[0].flavor_text
        let pokemon = new PokeApiPokemon(res.data, text)
        ProxyState.activePokemon = pokemon
    }
}

export const pokemonService = new PokemonService()