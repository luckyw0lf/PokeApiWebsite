import {BaseCategory} from "@/api/Category";

export type Meta = {
    ailment: Ailment
    ailment_chance: number
    category: BaseCategory
    crit_rate: number
    drain: number
    flinch_chance: number
    healing: number
    max_hits: number|null
    max_turns: number|null
    min_hits: number|null
    min_turns: number|null
    stat_chance: number
}

export type Ailment = {
    name: string
    url: string
}