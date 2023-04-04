//NUMBER 1
let person = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
        url: "https://dummy.com/red-image.jpg",
    }
};

for (let key of Object.keys(person)) {
    if (typeof person[key] == 'string') {
        person[key] = person[key].replace('red', 'blue');
        person[key] = person[key].replace('RED', 'blue');
        person[key] = person[key].replace('Red', 'blue');
    }
}
person.images.url = person.images.url.replace('red', 'blue');

console.log('NO1. ', person);

function displayResult1() {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = JSON.stringify(person);
}