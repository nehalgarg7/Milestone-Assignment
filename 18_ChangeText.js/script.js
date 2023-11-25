function handleClick ()
{
    let element = document.getElementById('heading');
    
    //element.innerText == "Pw Skills" ? element.innerText =  "The most affordable learning platform" : element.innerText = "Pw Skills";
    element.innerText = `${element.innerText == "Pw Skills" ? "The most affordable learning platform" : "Pw Skills"}`
    
}