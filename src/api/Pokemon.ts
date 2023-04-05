import {AbilityData} from "@/api/Ability";
import {MoveData} from "@/api/Move";
import {GameIndex} from "@/api/Version";
import {HeldItem} from "@/api/Item";
import {Sprites} from "@/api/Sprites";

export type BasePokemon = {
    name: string
    url: string
}

export type Pokemon = {
    abilities: AbilityData[]
    base_experience: number
    forms: BasePokemon[]
    game_indices: GameIndex[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: MoveData[]
    name: string
    order: number
    past_types: TypeData[]
    species: BaseSpecie[]
    sprites: Sprites
    stats: StatData[]
    types: TypeData[]
    weight: number
}

export type BaseSpecie = {
    name: string
    url: string
}

export type StatData = {
    base_stat: number
    effort: number
    stat: BaseStat
}

export type BaseStat = {
    name: string
    url: string
}

export type TypeData = {
    slot: number
    type: BaseType
}

export type BaseType = {
    name: string
    url: string
}

