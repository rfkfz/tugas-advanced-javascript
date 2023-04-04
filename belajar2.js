//NUMBER 2
let laporan = {
    marketing: [
        {
            name: "Budi",
            salary: 5000000,
        },
        {
            name: "Agus",
            salary: 4500000,
        },
    ],
    engineer: {
        frontend: [
            {
                name: "Suci",
                salary: 8500000,
            },
            {
                name: "Lukito",
                salary: 7000000,
            },
        ],
        backend: [
            {
                name: "Bustomi",
                salary: 9500000,
            },
        ],
        devops: [
            {
                name: "Paul",
                salary: 9000000,
            },
        ],
    },
};

function totalSalary(laporan) {
    let total = 0;
    for (let key in laporan) {
        if (typeof laporan[key] === 'object') {
            total += totalSalary(laporan[key]);
        } else {
            if (key === 'salary') {
                total += laporan[key];
            }
        }
    }
    return total;
}

console.log('NO2. Total gaji = ', totalSalary(laporan));