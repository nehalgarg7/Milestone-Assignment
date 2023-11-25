function colorMixer(color1, color2) {

    if((color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'))
    {
        return "purple";
    }
    else if ((color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'))
    {
        return "orange";
    }
    else if ((color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'))
    {
        return "green";
    }
    else
    {
        return "Invalid Color Combination";
    }
}

console.log(colorMixer('red', 'blue')); 