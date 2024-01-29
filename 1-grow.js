// FOR LOOP
// function grow(x){
//     let result = x[0];

//     for(let i = 1; i < x.length; i++){
//         result *= x[i];
//     }

//     return result;
// }


// REDUCE
// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr, 1)

//     return result;
// }

// ONE LINE FUNCTION
// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1)
// }

// FUNCTION EXPRESSION
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1,2,3,4]))