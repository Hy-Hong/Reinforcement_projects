// const DINNER_MAP = new Map();
// DINNER_MAP.set('Monday', 'Eat rice and Fish');
// DINNER_MAP.set('Tuesday', 'Eat rice and Eggs');
// DINNER_MAP.set('Wednesday', 'Eat rice and Treykhor');
// DINNER_MAP.set('Thursday', 'Eat rice and Meat');
// DINNER_MAP.set('Friday', 'Eat rice and Vegatable');
// DINNER_MAP.set('Saturday', 'Eat rice and Salt');
// DINNER_MAP.set('Sunday', 'Eat rice and Chicken');

// // console.log(DINNER_MAP.size);
// // console.log(DINNER_MAP.get('Sunday'));

// DINNER_MAP.forEach((value, key) => {
//     // console.log(key + " : " + value);
//     var result = document.querySelector('table');
//     result.innerHTML += `
//         <tr>
//             <td>${key}</td>
//             <td>${value}</td>
//         </tr>
//     `;
// });

const STUDENT_MAP = new Map();

STUDENT_MAP.set(123, {"name": "Romdul", "age": 18, "province": "Pursat"});
STUDENT_MAP.set(124, {"name": "Bopha", "age": 19, "province": "Siem Riep"});
STUDENT_MAP.set(125, {"name": "Chompey", "age": 20, "province": "Kampong Cham"});
STUDENT_MAP.set(126, {"name": "Chompa", "age": 19, "province": "Battambang"});
STUDENT_MAP.set(127, {"name": "Kolab", "age": 25, "province": "Pailin"});

// console.log(STUDENT_MAP.size)

STUDENT_MAP.forEach((value, key) =>{
//    console.log(value['age'])
var result = document.querySelector('table');
result.innerHTML += `
    <tr>
        <td>${key}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.province}</td>
    </tr>
`;
});