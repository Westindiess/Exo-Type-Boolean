let sun = true;
let temperature = 0;
let clothes = '';

temperature = Math.floor(Math.random() * (30 - -15) - 15)

if (sun) {
  clothes = 'Crème solaire, '
}

if (temperature <= 0) {
  clothes += 'T-shirt, ' + 'Sweat, ' + 'Coat, ' + 'Big Socks, ' + 'Boots, ' + 'Pants, ' + 'Or stay home..., '
}
else if (temperature > 0 && temperature <= 15) {
  clothes += 'T-shirt, ' + 'Sweat, ' + 'Coat, ' + 'Socks ' + 'Baskets, ' + 'Pants, '
}
else if (temperature > 15 && temperature <= 20) {
  clothes += 'T-shirt, ' + 'Sweat, ' + 'Socks, ' + 'Baskets, ' + 'Jean, '
}
else {
  clothes += 'naked '
}

console.log(`Il fait ${temperature} degré, je vous recommande de porter: ${clothes}`)
