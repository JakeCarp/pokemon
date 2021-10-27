import { PokeApiPokemon } from "./PokeApiPokemon.js";

export class SelectedPokemon extends PokeApiPokemon {
    constructor(nickName, data) {
        super(data)
        this.nickName = nickName
    }

}