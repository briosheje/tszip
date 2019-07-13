const zip = require('tszip').zip;

const [a,b] = [[1,2],[3,4]];

console.log('input is', [a,b]);

const zipped = [...zip(a,b)];
console.log('zipped is', zipped);