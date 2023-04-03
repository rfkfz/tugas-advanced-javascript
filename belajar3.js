const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];
for (let i = 0; i < urls.length; i++) {
    fetch(urls[i])
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error guys!', error);
        });
}


