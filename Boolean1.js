let res1 = (true && false) || (false && true) // output : false
let res2 = 10 > 11 && 11 > 10 // output : false
let res3 = (true || false) && true // output : true
let res4 = (!true && !false) || (!false && !false) //  output : true
let res5 = 'Hello' === 'Hello' && 'World' == 'Word' // output : false
let res6 = (!(20 >= 20) && 7 === 7) || true //  output : true
let res7 = '1' === 1 && '2' == 2 && '3' === 3 // output : false
let res8 = !res7 // output : true
let res9 = !res8 // output : false
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9) // output : true

console.log(`res1 = ${res1}`)
console.log(`res2 = ${res2}`)
console.log(`res3 = ${res3}`)
console.log(`res4 = ${res4}`)
console.log(`res5 = ${res5}`)
console.log(`res6 = ${res6}`)
console.log(`res7 = ${res7}`)
console.log(`res8 = ${res8}`)
console.log(`res9 = ${res9}`)
console.log(`res10 = ${res10}`)

