export default class NumUtil{
    static addComma(n){
        const num = parseFloat(n);
        if(num === undefined || isNaN(parseFloat(num))) return 0;
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static removeComma(n){
        return parseFloat(n.replace(/,/g, '')) || 0;
    }
}