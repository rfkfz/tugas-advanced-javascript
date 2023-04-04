const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];

for (let i = 0; i < urls.length; i++) {
    var hasil;
    fetch(urls[i])
        .then(data => {

            hasil = console.log('NO3.', data);
        })
        .catch(error => {
            console.error('Link error guys!', error);
        });
}


function displayResult3() {
    note = 'Hasil respon semua URL hanya bisa dilihat dari console log.';
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = note + '<br> URL yang bisa difetch yaitu ' + urls[0];
}

