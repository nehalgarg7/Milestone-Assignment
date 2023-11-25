window.onload = function () {
    let content = document.getElementById('paragraph');
    let paragraph = content.innerText;

    let newParagraph = paragraph.trim().split(' ').map((word) => {
        if (word.length > 8) {
            return '<span class="hightlight">' + word + '</span>'
        } else {
            return word
        }
    }).join(' ');

    content.innerHTML = newParagraph;
}