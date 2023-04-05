import {reactive} from "vue";

export const pagenation = reactive({
    offset: 0,
    changeOffset(newOffset: number){
        this.offset = newOffset
    }
})