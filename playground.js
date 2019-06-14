let arr = [];

for (let i = 0; i <= 255; i++) {
    function dec2bin(x) {
        return (x >>> 0).toString(2);
    }
    arr.push(dec2bin(i));
}

console.log(arr);
