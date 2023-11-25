window.onload = function()
{
    window.onkeydown = function (e) {
        let element = document.getElementById("container");
        let keyCode = e.keyCode;
        e.preventDefault();
    
        if (keyCode == 37) {
            element.style.left = parseInt(element.style.left) - 5 + 'px';
        }
        else if (keyCode == 38) {
            element.style.top = parseInt(element.style.top) - 5 + 'px';
        }
        else if (keyCode == 39) {
            element.style.left = parseInt(element.style.left) + 5 + 'px';
    
        }
        else if (keyCode == 40) {
            element.style.top = parseInt(element.style.top) + 5 + 'px';
        }
    }
}
