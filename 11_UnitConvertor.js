function unitConvertor(temperatures)
{
    return temperatures.map((temperature) => (temperature*1.8)+32);
}

let temperatures = [25, 100, 0];

console.log(unitConvertor(temperatures));