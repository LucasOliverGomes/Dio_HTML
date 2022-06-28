function substituiPares(array) {
    if(!array.lenght) return -1;
    if(!array) return -1; // verificação de Número

    for(let i = 0; i < array.lenght; i++) {
        if(array[i] === 0) {
         console.log("Você já e zero!")   
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let result = [1, 2, 3, 5, 7, 80, 33, 55, 624];
substituiPares(result);

console.log(substituiPares(result));