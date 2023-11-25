function print(size) {
    for (let i = size; i >= 1; i--) {
        let str = "* ";
        console.log(str.repeat(i));
    }
}
print(6);