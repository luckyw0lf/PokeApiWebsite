export type EncounterMethod = {
    id: number
    name: string
    names: Translation[]
    order: number
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