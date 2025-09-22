import ProductArray from '../../productArray.js'



export function productSorter(tag){
    const newArray = [];

    for(const prod in ProductArray){
        if (ProductArray[prod].Tags.includes(tag)){
            newArray.push(prod);
        }
    }
    return newArray;
}

