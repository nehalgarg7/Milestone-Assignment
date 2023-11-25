function removeDuplicates (items) 
{
    return items.filter((item,
        index) => items.indexOf(item) === index);
}

const items = ['mango', 'apple', 'mango', 'banana', 'pineapple', 'apple', 'mango'];

console.log(removeDuplicates(items));