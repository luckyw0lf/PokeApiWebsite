import {NamedApiResource} from "@/api/ApiCall";

export type Version = {
    name: string
    url: string
}

export type VersionDetail = {
    rarity: number
    version: Version
}

export type VersionGroupDetail = {
    level_learned_at: number,
    move_learn_method: NamedApiResource
}

export type GameIndex = {
    game_index: number
    version: Version
}
