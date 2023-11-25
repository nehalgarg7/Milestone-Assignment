function rentalCost (type, days)
{
    switch(type)
    {
        case 'Economy':
            return 4000*days;
        case 'Midsize':
            return 10000*days;
        case 'luxury' :
            return 20000*days;
        default :
            return "Invalid Car Type!";
    }
}

console.log(rentalCost('Economy', 48));