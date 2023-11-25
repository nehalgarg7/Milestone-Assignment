function vowelCount(name) 
{
    let count = 0;

    for(i=0; i<name.length; i++)
    {
        if(name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
        {
            count++;
        }
    }

    return count;
}

console.log('Vowel Count: ' + vowelCount('Nehal'));