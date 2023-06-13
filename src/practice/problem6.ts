// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface PersonInterface {
    name: string;
    age: number;
    email: string;
}



const people: PersonInterface[] = [
    { name: "John Doe", age: 25, email: "john@example.com" },
    { name: "Jane Smith", age: 30, email: "jane@example.com" },
    { name: "Bob Johnson", age: 40, email: "bob@example.com" },
  ];

function findPersonByEmail(arr: PersonInterface[], email: string): PersonInterface | null {
    for(const person of arr) {
        if(person.email === email) {
            return person
        }
    }

    return null
}


const matchedPerson = findPersonByEmail(people, "jane@example.com");
if (matchedPerson) {
  console.log("Found person:", matchedPerson);
} else {
  console.log("No person found with the given email.");
}
  