const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let j = 0; j < autos.length; j++){
console.log(j + ' : ' + autos[ j ] );
}
autos[1] = 'MercedesBenz';
console.log ( autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

console.log(typeof autos);

console.log( Array.isArray(autos) );

console.log( autos instanceof Array);
