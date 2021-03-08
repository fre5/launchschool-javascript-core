let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

/*the family data got ransacked because munster
**variable only passed by reference
*/

//create with Object.create(obj) to create a separate copy
let munstersInstance = Object.create(munsters)

//Spot is a bad dog
messWithDemographics(munstersInstance);

//instance is affected
console.log(munstersInstance);

//changes not affected
console.log(munsters);