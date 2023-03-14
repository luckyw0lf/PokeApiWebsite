import {VersionDetail} from "@/api/Version";

export type HeldItem = {
    item: BaseItem
    version_details: VersionDetail[]
}

export type BaseItem = {
    name: string
    url: string
}