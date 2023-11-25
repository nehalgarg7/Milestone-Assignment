function handleClick() {
    let items = document.getElementById('items');
    
    let newitem = document.createElement('li');
    newitem.textContent = document.getElementById('item').value;
    
    newitem.textContent === "" ? alert("Write Something...") : items.append(newitem);
}