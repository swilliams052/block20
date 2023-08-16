const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const myDiv = document.getElementById('root')
    const h1 = document.createElement('h1')
    h1.innerText = 'FREELANCERS'
    myDiv.append(h1);
    const ul = document.createElement('ul')
    myDiv.backgroundColor = 'beige'

    for(let i = 0; i < users.length; i++) {
        const li= document.createElement('li')
        li.innerText = `${users[i].name}, ${users[i].age}, ${users[i].occupation} `
        myDiv.append(li)
        

    }

}


//call the main function
main();