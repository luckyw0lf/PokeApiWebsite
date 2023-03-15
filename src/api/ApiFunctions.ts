import {HomeApiCall} from "@/api/ApiCall";
import {Pokemon} from "@/api/Pokemon";
import {EncounterMethod} from "@/api/EncounterMethod";
import {Ability} from "@/api/Ability";
import {Move} from "@/api/Move";

export async function homeApiCall(limit: number, offset: number): Promise<HomeApiCall> {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit="+limit+"&offset="+offset)
        .then(res => res.json())
        .then(res => {
            return res as HomeApiCall
        })
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
    return await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(res => res.json())
        .then(res => {
            return res as Pokemon
        })
}

export async function getEncounterByPokemonID(id: number): Promise<EncounterMethod> {
    return await fetch("https://pokeapi.co/api/v2/encounter-method/" + id)
        .then(res => res.json())
        .then(res => {
            return res as EncounterMethod
        })
}

export async function getAbilityByURL(url: string): Promise<Ability> {
    return await fetch(url)
        .then(res => res.json())
        .then(res => {
            return res as Ability
        })
}

export async function getMoveByURL(url: string): Promise<Move> {
    return await fetch(url)
        .then(res => res.json())
        .then(res => {
            return res as Move
        })
}