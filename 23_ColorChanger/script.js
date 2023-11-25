let btn = document.getElementById('btn');

function generateRandomColor()
{
    let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];

    let hexcode = "#";

    for(let i=0; i<6; i++)
    {
        let index = Math.floor(Math.random()*15);
        hexcode += arr[index];
    }

    return hexcode;
}

function handleClick()
{
    document.body.style.background = generateRandomColor();
}