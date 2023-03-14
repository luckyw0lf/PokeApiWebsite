import {VersionGroupDetail} from "@/api/Version";

export type MoveData = {
    move: BaseMove
    version_group_details: VersionGroupDetail[]
}

export type BaseMoveLearnMethod = {
    name: string
    url: string
}

export type BaseMove = {
    name: string
    url: string
}