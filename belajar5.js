class Car {
    constructor(namaBrand, tahunBuat, negara) {
        this.namaBrand = namaBrand;
        this.tahunBuat = tahunBuat;
        this.negara = negara;

    }

    hitungUmur() {
        var tahun = new Date().getFullYear();
        return tahun - this.tahunBuat;
    }

    checkNegaraUS() {
        if (this.negara === 'US') {
            return 'YES'
        } else {
            return 'BUKAN'
        }
    }
}

var contoh = new Car('Lamborgini 350 GT', 1963, 'US');

console.log('NO5. Umur mobil yaitu ' + contoh.hitungUmur() + ' tahun ' + 'Mobil terbuat dari US? ' + contoh.checkNegaraUS());

function displayResult5() {
    ex = JSON.stringify(contoh);
    var resultElement = document.getElementById("result");
    hasil = ('Umur mobil yaitu ' + contoh.hitungUmur() + ' tahun, ' + 'Mobil terbuat dari US? ' + contoh.checkNegaraUS());
    resultElement.innerHTML = 'Contoh: <br>' + ex + '<br> Hasilnya: <br>' + hasil;
}
