import md5 from 'js-md5';

const secretKey = 'bgvyzdsv';
let number = 0;

while (!(md5(`${secretKey}${number}`)).startsWith('000000'))
    number++

console.log(number);