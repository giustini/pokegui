import { HttpService, QueryParams } from "./http/HttpService";
import { Pokemon } from "../model";
import { PokemonTypes } from "../model/pokemon/PokemonType";
import { PokemonStats } from "../model/pokemon/PokemonStats";
import { PokemonSprites } from "../model/pokemon/PokemonSprites";


export type PokemonListItemDTO = {
    name: string;
};

type PokemonListResponse = {
    count: number;
    results: PokemonListItemDTO[];
};

const POKEMON_ENDPOINT = "/pokemon";

export default class PokemonService {

    http: HttpService = new HttpService();

    public getPokemonList(queryParams?: QueryParams): Promise<PokemonListResponse> {
        return this.http.get(POKEMON_ENDPOINT, queryParams)
            .then(res => res.data as PokemonListResponse);
    }

    public getPokemon(name: string): Promise<Pokemon> {
        return this.http.get(name)
            .then(res => res.data)
            .then(rawPokemon => this.buildPokemon(rawPokemon))
    }

    private buildPokemon(rawPokemon: any): Pokemon {
        return {
            id: rawPokemon.id,
            name: rawPokemon.name,
            baseExperience: rawPokemon.base_experience,
            height: rawPokemon.height,
            isDefault: rawPokemon.is_default,
            order: rawPokemon.order,
            weight: rawPokemon.weight,
            types: this.buildTypes(rawPokemon.types),
            sprites: this.buildSprites(rawPokemon.sprites),
            stats: this.buildStats(rawPokemon.stats)
        }
    }

    private buildTypes(rawTypes: any[]): PokemonTypes {
        return {
            type1: rawTypes.find(type => type.slot === 1)[ "type" ][ "name" ],
            type2: rawTypes.find(type => type.slot === 2) ?
                rawTypes.find(type => type.slot === 2)[ "type" ][ "name" ] : undefined
        }
    }

    private buildStats(rawStats: any[]): PokemonStats {
        return {
            hp: {
                baseStat: rawStats.find(stat => stat.stat.name === "hp")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "hp")[ "effort" ]
            },
            attack: {
                baseStat: rawStats.find(stat => stat.stat.name === "attack")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "attack")[ "effort" ]
            },
            defense: {
                baseStat: rawStats.find(stat => stat.stat.name === "defense")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "defense")[ "effort" ]
            },
            specialAttack: {
                baseStat: rawStats.find(stat => stat.stat.name === "special-attack")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "special-attack")[ "effort" ]
            },
            specialDefense: {
                baseStat: rawStats.find(stat => stat.stat.name === "special-defense")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "special-defense")[ "effort" ]
            },
            speed: {
                baseStat: rawStats.find(stat => stat.stat.name === "speed")[ "base_stat" ],
                effort: rawStats.find(stat => stat.stat.name === "speed")[ "effort" ]
            }

        };
    }

    private buildSprites(rawSprites: any): PokemonSprites {
        return {
            frontDefault: rawSprites.front_default,
            backDefault: rawSprites.back_default,
            frontFemale: rawSprites.front_female,
            backFemale: rawSprites.back_female,
            frontShiny: rawSprites.front_shiny,
            backShiny: rawSprites.back_shiny,
            frontShinyFemale: rawSprites.front_shiny_female,
            backShinyFemale: rawSprites.back_shiny_female
        };
    }
}
