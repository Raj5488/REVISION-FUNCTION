const obj1 = {
    name: "Jitu raj Sharma",
    roll: 12345,
    isloggedIn: true,
    registerUser: function (){
        console.log(this.name + "is a registerUser");
    }
}

const obj2 = {
    10: "number10",         //before colean  "key" after colean "values"
    20: "number20"
}


            //SYMBOL
const key1 = Symbol("key1")
const key2 = Symbol("key2")

const obj3 ={
    [key1]: "Jitu Raj Sharma",
    [key2]: "PW skills"
}

console.log(obj3);
console.log(obj3[key1]);

    // create new object methods

const obj4 = new Object()
obj4.email = "Jiturajsharma8093@gmail.com"


Object.freeze(obj5);

const obj5 ={
    name: "Raju",
    email: "raju@123.com",
    isloggedIn: true
}
console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.keys(obj5));
console.log(Object.values(obj5));
