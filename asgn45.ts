function carDetails (manufacturer: string, modelName: string, ...additionalInfo) {
    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
    return car;    
}

const myCar = carDetails ("Toyata", "Corrola", ['color', 'Blue'], ['Year', 2024]);
console.log(myCar);