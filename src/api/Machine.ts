import {Version} from "@/api/Version";

export type BaseMachine = {
    machine: MachineURL
    version_group: Version
}

export type MachineURL = {
    url: string
}