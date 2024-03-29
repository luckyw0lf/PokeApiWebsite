import {Language, Translation} from "@/api/EncounterMethod";
import {Version, VersionDetail, VersionGroupDetail} from "@/api/Version";
import {BasePokemon} from "@/api/Pokemon";
import {NamedApiResource} from "@/api/ApiCall";

export type AbilityData = {
    ability: NamedApiResource
    url: string
    is_hidden: boolean
    slot: number
}

export type Ability = {
    effect_changes: EffectChanges
    effect_entries: Entry[]
    flavor_text_entries: Entry[]
    generation: NamedApiResource
    id: number
    is_main_series: boolean
    name: string
    names: Translation[]
    pokemon: PokemonWithAbility[]
}

export type PokemonWithAbility = {
    is_hidden: boolean
    pokemon: BasePokemon
    slot: number
}

export type EffectChanges = {
    effect_entries: Entry[]
    version_group: Version
}

export type Entry = {
    effect: string
    language: Language
    short_effect: string
}

export type FlavorEntry = {
    flavor_text: string
    language: Language
    version_group: Version
}
