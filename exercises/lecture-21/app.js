const fruitsString = 'apple banana cantaloupe blueberries grapefruit';
const fruits = fruitsString.split(' ');

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

let i1 = 0;
do {
    console.log(fruits[i1]);
    i1++;
} while (i1 < fruits.length);

for (const fruit of fruits) {
    console.log(fruit);
}

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

const names = ['Batman'];
names.push('Joker');
console.log(names);

names.unshift('Joker');
console.log(names); 

const names1 = ['Batman', 'Joker', 'Bane'];
names1.unshift('Catwooman');
console.log(names1);

let names2 = ['Batman', 'Joker', 'Bane'];
names2 = ['Catwoman', ...names2];
console.log(names2); 

let names3 = ['Batman', 'Joker', 'Bane'];
names3.splice(1, 0, 'Catwoman');
console.log(names3); 

const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexesToRemove = [1, 2]; 
for (let i = indexesToRemove.length - 1; i >= 0; i--) {
    names4.splice(indexesToRemove[i], 1);
}
console.log(names4); 

const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexCatwoman = names5.indexOf('Catwoman');
const indexJoker = names5.indexOf('Joker');
if (indexCatwoman !== -1) {
    names5[indexCatwoman] = 'Alfred';
}
if (indexJoker !== -1) {
    names5[indexJoker] = 'Alfred';
}
console.log(names5); 

const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

if (!names6.includes('Alfred')) {
    names6.push('Alfred');
}
console.log(names6); 

const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred'];

if (names7.includes('Alfred')) {
    const index = names7.indexOf('Alfred');
    names7.splice(index, 1);
}

console.log(names7); 



                                                                                                                                                                                console.log("________00000000000___________000000000000_________");
                                                                                                                                                                                console.log("______00000000_____00000___000000_____0000000______");
                                                                                                                                                                                console.log("____0000000_____________000______________00000_____");
                                                                                                                                                                                console.log("___0000000_______________0_________________0000____");
                                                                                                                                                                                console.log("__000000____________________________________0000___");
                                                                                                                                                                                console.log("__00000_____________________________________ 0000__");
                                                                                                                                                                                console.log("_00000______________________________________00000__");
                                                                                                                                                                                console.log("_00000_____________________________________000000__");
                                                                                                                                                                                console.log("__000000_________________________________0000000___");
                                                                                                                                                                                console.log("___0000000______________________________0000000____");
                                                                                                                                                                                console.log("_____000000____________________________000000______");
                                                                                                                                                                                console.log("_______000000________________________000000________");
                                                                                                                                                                                console.log("__________00000_____________________0000___________");
                                                                                                                                                                                console.log("_____________0000_________________0000_____________");
                                                                                                                                                                                console.log("_______________0000_____________000________________");
                                                                                                                                                                                console.log("_________________000_________000___________________");
                                                                                                                                                                                console.log("_________________ __000_____00_____________________");
                                                                                                                                                                                console.log("______________________00__00_______________________");
                                                                                                                                                                                console.log("________________________00_________________________");
