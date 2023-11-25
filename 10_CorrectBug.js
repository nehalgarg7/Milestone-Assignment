function correctBug(quantities)
{
    return quantities.map((quantity) => quantity*2);
}

let quantities = [1,2,3,4,5];

console.log(correctBug(quantities));