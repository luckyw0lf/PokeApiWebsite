import {VersionGroupDetail} from "@/api/Version";
import {Entry, FlavorEntry, Generation} from "@/api/Ability";
import {BasePokemon, BaseType, TypeData} from "@/api/Pokemon";
import {BaseMachine} from "@/api/Machine";
import {Meta} from "@/api/Meta";
import {Translation} from "@/api/EncounterMethod";

export type MoveData = {
    move: BaseMove
    version_group_details: VersionGroupDetail[]
}

export type BaseMoveLearnMethod = {
    name: string
    url: string
}

export type Move = {
    accuracy: number
    contest_combos: ContestComboData
    contest_effect: ContestEffect
    contest_type: ContestType
    damage_class: DamageClass
    effect_change: null
    effect_entries: Entry[]
    flavor_text_entries: FlavorEntry[]
    generation: Generation
    id: number
    learned_by_pokemon: BasePokemon[]
    machines: BaseMachine
    meta: Meta
    name: string
    names: Translation[]
    past_values: []|null
    power: number
    hp: number
    pp: number
    priority: number
    stat_changes: []|null
    super_contest_effect: ContestEffect
    target: Target
    type: BaseType
}

export type Target = {
    name: string
    url: string
}

export type ContestEffect = {
    url: string
}

export type ContestType = {
    name: string
    url: string
}

export type DamageClass = {
    name: string
    url: string
}


export type ContestComboData = {
    normal: ContestCombo
    super: ContestCombo
}

export type ContestCombo = {
    use_after: BaseMove | null
    use_before: BaseMove | null
}

export type BaseMove = {
    name: string
    url: string
}