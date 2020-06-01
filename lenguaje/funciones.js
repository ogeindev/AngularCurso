function suma(a, b){
    return a + b;
}

console.log(suma());
console.log(suma(2,3,4))

const cubo = a => a*a*a;
console.log(cubo(3))
setTimeout(() => {
    console.log(cubo(10))
},2000);