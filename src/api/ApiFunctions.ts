import {ApiCall} from "@/api/ApiCall";


export async function apiCall(key: string): Promise<ApiCall> {
    return await fetch("http://66.59.211.245:25564/api/v1/readonly/events/heats/scoreboards?api_key="+key)
        .then(res => res.json())
        .then(res => {
            return res as ApiCall
        })
}
