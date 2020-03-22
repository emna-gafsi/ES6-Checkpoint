const pets = [{
    name: "Max",
    type: "dog",
    bornOn: 2018
  },
  {
    name: "Angel",
    type: "cat",
    bornOn: 2015
  },
  {
    name: "Jasper",
    type: "dog",
    bornOn: 2016
  }
];

function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}

pets.forEach(pet => pet.age = getAge(pet))
console.log(pets);

const dogs = pets.filter(pet => {
  return pet.type == `dog`
});
console.log(dogs);
const jasper = pets.filter((pet) => {
  return pet.name === `Jasper`;

});
const age = pet.age;
console.log(`Jasper is   ${age} years old`);