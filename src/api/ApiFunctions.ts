import {HomeApiCall, NamedApiResource} from "@/api/ApiCall";
import {Pokemon} from "@/api/Pokemon";
import {EncounterMethod} from "@/api/EncounterMethod";

export async function homeApiCall(): Promise<HomeApiCall> {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
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

export async function getNamedApiResource(prop: NamedApiResource) {
    return await fetch(prop.url)
        .then(res => res.json())
        .then(res => {
            return res
        })
}
export async function getNamedApiResourceByUrl(prop: string) {
    return await fetch(prop)
        .then(res => res.json())
        .then(res => {
            return res
        })
}

export async function getEncounterByPokemonID(id: number): Promise<EncounterMethod> {
    return await fetch("https://pokeapi.co/api/v2/encounter-method/" + id)
        .then(res => res.json())
        .then(res => {
            return res as EncounterMethod
        })
}
