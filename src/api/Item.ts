import {VersionDetail} from "@/api/Version";
import {NamedApiResource} from "@/api/ApiCall";

export type HeldItem = {
    item: NamedApiResource
    version_details: VersionDetail[]
}
