import {BasePokemon} from "@/api/Pokemon";

export type HomeApiCall = {
    count: number
    next: string
    previous: string|null
    results: BasePokemon[]
}

export type NamedApiResource = {
    name: string
    url: string
}
