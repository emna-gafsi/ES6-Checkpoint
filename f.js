let pets = [{
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
const getAge = pet => {
    return new Date().getFullYear() - pet.bornOn;
};
const petsWithAge = pets.forEach(pet => {
    pet.age = getAge(pet);
});
const dog = pets.filter(type => {
    type == "dog";
});
const jasper = pets.map((pet) => {
    pet.name == "pet";
});