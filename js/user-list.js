const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
};

const fullName = person.result[0].name.fullName[0] +' ' + person.result[0].name.fullName[1];

console.log(fullName)

function fristCardDetails(id,titel,id_age,age__frist__value,strite__id,strite__adress){
    document.getElementById(id).innerText = titel;
    document.getElementById(id_age).innerText = age__frist__value;
    document.getElementById(strite__id).innerText = strite__adress;
}

const titel__frist = person.result[0].name.fullName[0] +' ' + person.result[0].name.fullName[1];
const age__frist__value = person.result[0].age;
const strite__adress = person.result[0].address.street + ','+ person.result[0].address.house;

fristCardDetails('titel__frist', titel__frist,'age-frist__id',age__frist__value,'stret__frist__id',strite__adress);

fristCardDetails('titel__frist', titel__frist,'age-frist__id',age__frist__value,'stret__frist__id',strite__adress);