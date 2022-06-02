const user = {
  firstName: "bayu",
  lastName: "andhika",
  user_id: 2,
};

let firstName = "bobo";
let lastName = "django";

({ firstName, lastName, user_id } = user);

console.log(firstName, lastName, user_id);
