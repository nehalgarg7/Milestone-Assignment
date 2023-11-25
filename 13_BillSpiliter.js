function BillSpiliter (dishCost, totalPeople)
{
    const totalCost = dishCost.reduce(((sum, dish) => sum + dish),0);
    const costPerIndiviual = totalCost / totalPeople ;

    return {
        totalCost : totalCost,
        costPerIndiviual : costPerIndiviual,
    }
}

const dishCost = [450, 250, 100, 780, 10];

console.log(BillSpiliter(dishCost, 4));