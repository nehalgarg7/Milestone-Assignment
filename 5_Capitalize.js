function capitalize (name) 
{
    return (name[0] > 'A' && name[0] < 'Z') ? name : name[0].toUpperCase() + name.substr(1,name.length);
}

console.log(capitalize('hello'));