// zadanie 1
function combine(operation, array1, array2) {

    const result = []
    for (let i = 0; i < array1.length; ++i) {
        result.push(operation(array1[i]??0, array2[i]??0));
    }
    return result
}

let wynik = combine((a, b) => a + b, [4, 5, 6, 7], [10, 20, 30]);
// wynik = combine((x, y) => [{x, y}], [4, 5, 6], [10, 20, 30]);    // pierwsza kropeczka
                                                                    // tu powinna byc druga kropeczka

console.log(wynik);

// Zadanie 2

function piggyBank(name, balance = 0) {
    return function(value) {
        if (value === undefined) {
            console.log(`${name} get ${balance}`);
            return balance;
        } else {
            balance += value;
            console.log(`${name} set ${balance}`);
        }
    }
}

let s1 = piggyBank("Piotr", 100);
s1(20);
let ile1 = s1();

let s2 = piggyBank("Anna", 50);
s2(30);
let ile2 = s2();

// Zadanie 3
studentsList = [
    {name: "Piotr", surname: "Nowak", points: 63},
    {name: "Tomasz", surname: "Kowalski", points: 88},
    {name: "Julia", surname: "Bagińska", points: 75},
]

let averagePoints = studentsList.reduce((sum, student) => sum + student.points, 0) / studentsList.length;

let betterThanAverage = studentsList.filter(student => student.points > averagePoints).map(student => `${student.name} ${student.surname}`);

let top3 = studentsList.sort((a, b) => b.points - a.points).slice(0, 3).map(student => `${student.name} ${student.surname}`);

let gradeConverter = {
    90: 'bdb',
    80: 'db+',
    70: 'db',
    60: 'dst+',
    50: 'dst'
};

let gradesList = studentsList.map(student => {
    let grade = Object.keys(gradeConverter).sort((a, b) => b - a).find(grade => student.points >= grade);
    return { surname: student.surname, grade: gradeConverter[grade] };
});


let sortedList = gradesList.sort((a, b) => a.surname.localeCompare(b.surname));

let grades = {};
gradesList.forEach(student => {
    if (grades[student.grade]) {
        grades[student.grade]++;
    } else {
        grades[student.grade] = 1;
    }
});

console.log("Średnia liczba punktów:", averagePoints);
console.log("Osoby z wynikiem wyższym niż średnia:", betterThanAverage);
console.log("Top 3:", top3);
console.log("Lista posortowana alfabetycznie:", sortedList);
console.log("Liczba osób zdobywających każdy stopień:", grades);
