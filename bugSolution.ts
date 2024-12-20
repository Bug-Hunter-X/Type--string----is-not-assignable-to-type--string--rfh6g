function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will now correctly output 'Hello, Jane Doe'
console.log(greeter(user[0])); //This also works by passing only the first element of the array