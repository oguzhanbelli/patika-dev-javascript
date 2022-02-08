let user1 = {
  firstName: "Bilgin",
  lastName: "Belli",
  score: [1, 2, 3, 4],
  isActive: false,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
  },
};

console.log(user1);
