const deeplyNestedProfile = {
  name: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  skills: {
    technical: [
      { name: "JavaScript", experience: "Intermediate" },
      { name: "React", experience: "Intermediate" },
      { name: "Node.js", experience: "Intermediate" },
    ],
    soft: [
      { name: "Communication", experience: "Advanced" },
      { name: "Problem Solving", experience: "Advanced" },
      { name: "Teamwork", experience: "Advanced" },
    ],
  },
};

const objCopy = deeplyNestedProfile;

console.log(deeplyNestedProfile === objCopy);
console.log(deeplyNestedProfile.skills === objCopy.skills);
console.log(deeplyNestedProfile.address === objCopy.address);
console.log(deeplyNestedProfile.skills.technical === objCopy.skills.technical);
console.log(deeplyNestedProfile.skills.soft === objCopy.skills.soft);
