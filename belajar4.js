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

function displayResult4() {
    var resultElement = document.getElementById("result");
    var jawaban = "Karena fungsi memiliki nama yang sama maka yang paling akhir yang dipanggil, intinya fungsi return 2 tertimpa dengan fungsi return 5.";
    resultElement.innerHTML = 'Hasilnya ' + example() + '.<br>' + jawaban;
}