export default class sendContent{
    static getListWidth(){
        const w = window.outerWidth;
        const p = 44;
        const max = 520;
        return w < max ? w - p : max - p;
    }

    static getWrapperWidth(len){
        return sendContent.getListWidth() * len;
    }

    static getWidth(len){
        return {
            list:       sendContent.getListWidth(),
            wrapper:    sendContent.getWrapperWidth(len),
        }
    }
}