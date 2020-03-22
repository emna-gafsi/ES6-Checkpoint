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

const petsWithAge = pets.forEach(pet => pet.age = getAge(pet))
console.log(petsWithAge);

const dogs = petsWithAge.find(pet => {
  return pet.type == `dog`
});
console.log(dogs);
const jasper = petsWithAge.filter((pet) => {
  pet.name == `jaspe`
});
console.log(`Jasper is   $(jasper.age) years old`);