import {NamedApiResource} from "@/api/ApiCall";

export type EncounterMethod = {
    chance: number
    condition_values: NamedApiResource[]
    max_level: number
    method: NamedApiResource
    min_level: number
}
export type BaseEncounterMethod = {
    location_area: NamedApiResource
    version_details: EncounterMethodData[]
}

export type EncounterMethodData = {
    encounter_details: EncounterMethod[]
    max_chance: number
    version: NamedApiResource
}

export type EncounterApiCall = {
    encounters: BaseEncounterMethod[]
}

export type Translation = {
    language: Language
    name: string
}

export type Language = {
    name: string
    url: string
}

export type BasicWithLanguage = {
    language: Language
}
