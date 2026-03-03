// let x : string | number = "HI";
// console.log(x);
// x = 2;



function greet(firstName: string) {
    console.log("Hello " + firstName);
    
}


let firstName = "Sejal"
greet(firstName);


let p : any = "Sejal";
p = 9;
p = {j: 100}


function sum(a: number, b : number) {
    console.log(a+b);
}

sum(2, 3);


function isAdult(age: number) {
    if(age > 18) console.log(true);
    else console.log(false);
}



isAdult(78);



