export class PokeApiPokemon {
    constructor(data, text = '') {
        this.name = data.name
        this.id = data.id || ''
        this.img = data.img || data.sprites.default_font
        this.height = data.height || 0
        this.weight = data.weight || 0
        this.types = data.types || []
        this.text = text
    }

    get Template() {
        return `
        <div>
        <p onclick="app.pokemonController.setActive('${this.name}')">${this.name.toUpperCase()}</p>
        </div>
        `
    }
}