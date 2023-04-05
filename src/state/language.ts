import {reactive} from "vue";
import {BasicWithLanguage} from "@/api/EncounterMethod";

export const lang = reactive({
    name: "en",
    change(language: string){
        this.name = language
    },
    filter<T extends BasicWithLanguage>(array: T[]): T[] {
        return array.filter(value => {return value.language.name === this.name}).length > 0
            ? array.filter(value => {return value.language.name === this.name})
            : array.filter(value => {return value.language.name === "en"})
    }
})