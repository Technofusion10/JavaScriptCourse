    // //Var Let Const Definition, Data Types
    // //-----------Var Definition
    // var - normal declaration it will work if used two same identifier
    // var Name = anna then
    // var Name = pedro
    // the name anna will be updated

    // //---------Let Definition
    //let will be error if you use same identifier
    //example
    //let name = anna
    //let name = pedero
    //this will be error as if you do this way
    //let fname = david
    //fname = justin
    //this code will be accepted

    // //---------Const Defiition
    //Const is constant means you will never change the value of your identifier
    // //example
    //const name = anna
    //name = pedro
    //this is error because const identifier cannot be change if you inputed another value of the same identifier

    //---------Data Types
    //-------String, Number, Boolean, Null, Undifined
    //example
    // const name = "pedro"; //-- String
    // const age = 24; //-- Number
    // const grade = 95.62 //-- Number
    // const isLegal = true; //-- boolean
    // const val = null; //--Null
    // const unk = undefined; //--undefined

    //typeof - will display the datatype
    //example console.log(typeof name)

    // const fname = "Matthew";
    // const lname = "Jimoya";
    // const age = 27;
    // const address = "Samar Street,Aluba, Macasandig, Cagayan de Oro City, Misamis Oriental, 9000";

    // let intrself = `My name is ${fname} ${lname} age of ${age} I live in ${address}`;

    // console.log(intrself.toUpperCase(intrself));

console.log();

//Object Literals
//---------array------
// const student = [
//     "Matthew R. Jimoya",
//     27,
//     "Samar Street",
//     "Aluba",
//     "Macasandig",
//     "Cagayan de Oro City",
//     "Misamis Oriental",
//     "9000",
// ];

// student.push("I Love You"); //add in the last index "PUSH"
// student.unshift("Student Information"); //add in the first Index "unshift"
// student.pop(); //delete the last index pop
// student.push("I Love You");
// student.splice(9,1) //delete specified
// const fname = "matthew";


// console.log(student);
// console.log(fname);
// console.log(student.indexOf("Macasandig"));


// if(Array.isArray(fname))
//     {
//     console.log("success");
//     }
// else
//     {
//         console.error("error 404");
//     }

//-----------Objects---------
// const man = {
//     firstname: "Matthew",
//     lastname: "Jimoya",
//     age: 27,
//     hubbies: [
//         "mobile legends",
//         "dota1", "dota2",
//         "clash of clans",
//         "pointblank"
//     ],
//     familyMember: {
//         mother: "Antonieta R. Jimoya",
//         father: "Joseph E. Jimoya",
//         borther: "Isaiah R. Jimoya",
//         girlfriend: "Clarise B. Cartajenas",
//         bestfriend: {
//             girl1: "Ruzzelle E. Otadoy",
//             girl2: "Queenie Jane M. Gaid",
//             boy1: "Keenrod T. Pansoy",
//             boy2: "Jerson F. Revelo"
//         }
//     }
// };
// let string = "hubbies:"
// console.log(man.firstname);
// console.log(string, man.hubbies[0]);

//-------------Array Objects------

// const address = [
//     {
//         id: 1,
//         country: "PHILIPPINES",
//         province: "MISAMIS ORIENTAL",
//         city: "CAGAYAN DE ORO CITY",
//         barangay: "MACASANDIG"
//     },

//     {
//         id: 2,
//         country: "New York",
//         province: "MISAMIS OCCIDENTAL",
//         city: "OZAMIZ CITY",
//         barangay: "Maningcol"
//     },

//     {
//         id: 3,
//         country: "United States",
//         province: "BUKIDNON",
//         city: "VALENCIA CITY",
//         barangay: "XAXIER STATES"
//     },

//     {
//         id: 4,
//         country: "PHILIPPINES",
//         province: "MISAMIS OCCIDENTAL",
//         city: "TUDELA",
//         barangay: "PAN-AY"
//     },

//     {
//         id: 5,
//         country: "PHILIPPINES",
//         province: "MISAMIS OCCIDENTAL",
//         city: "CLARIN",
//         barangay: "POBLACION III"
//     }
// ];

//loops, filtering, mapping
// const addressProvince = address.filter(function(add){
//     return add.province == "MISAMIS OCCIDENTAL";
// }).map(function(add){
//     return add.barangay;
// });

// console.log(addressProvince);


// console.log(address);

// for(var i = 0; i<address.length; i++){
//     console.log(address[i].id);
//     console.log(address[i].country);
//     console.log(address[i].province);
//     console.log(address[i].city);
// }

// address.forEach(function(add){
//     console.log(add.country)
// })

// let addressCity = address.filter(function(City){ //filtering
//     return City.city == "OZAMIZ CITY";
// });

// console.log(addressCity);

// const addressCountry = address.map(function(add){ //array format
//     return add.country;
// });

// console.log(addressCountry);

// for (let add of address){
//     console.log(add.country);
// }

// let add = 0;
// while(add < address.length){
//     console.log(`This is while loop and the value ${add} `);
//     add++;
// }

// const addressCountry = address.filter(function(add){
//     return add.country == "PHILIPPINES";
// })
// console.log(addressCountry);

//--------JSON--------
// const AddressJSON = JSON.stringify(address);
// console.log(AddressJSON);

console.log();

//Conditionals

// const num = "100";

// if(num === 100 && num > 50){
//     console.log('either of them is true');
// }else if(num > 50){
//     console.log('value is greater than 50');
// }else{
//     console.error('error 404');
// }

console.log();

//function types
// let x = 20;
// let i = 50;
//example 1 traditional function
// function getSum(o,y){
//     let sum = o + y;
//     let string = `The sum of ${o} and ${y} is: `
//     return string + sum;
// }
// console.log(getSum(200,300));
//
// function getSum(x,y){
//     let sum = x + y;
//     return sum;
// }
// console.log(getSum(300,700));
//
//example 3 arrow function
//const getSum = (x,i) => x+i;
//console.log(getSum(500,300))

console.log();
//Object Oriented Programing

//-----------Constructor Function------
// function Person(fname, lname, bt){
//         this.fname = fname;
//         this.lname = lname;
//         this.bt = bt;

//         const getFullname = () => {
//             return `${this.fname} ${this.lname}`;
//         }

//         const getBloodType = () => {
//             return `${bt}`;
//         }
// }


//---------Class-----------
// class Person{
// // ---------Constructor Function--------
//     constructor(fname, lname, bt){
//         this.fname = fname;
//         this.lname = lname;
//         this.bt = bt;
//     }

//     getFullname(){
//         return `${this.fname} ${this.lname}`;
//     }

//     getBloodType(){
//         return `${this.bt}`;
//     }
// }

// //-------Instantiation-----
// let fname = "Matthew";
// let lname = "Jimoya";
// const person1 = new Person(fname,lname,"B+");
// console.log(person1);

// const person2 = new Person("Isaiah","Ramos","O");
// console.log(person2);
// console.log(person1.getFullname(),person1.getBloodType());
// console.log(person2.getFullname(),person2.getBloodType());








