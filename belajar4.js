function example() {
    function dummy() {
        return 2;
    }
    return dummy();
    function dummy() {
        return 5;
    }
}

alert(example());

var hasil = example();
console.log('NO4. hasilnya adalah', hasil);