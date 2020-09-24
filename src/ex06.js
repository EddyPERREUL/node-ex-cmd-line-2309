/* 
Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne de commande est un palindrome:

% node palindromeChecker.js tenet
tenet is a palindrome
% node palindromeChecker.js 3133773313
3133773313 is a palindrome
% node palindromeChecker.js Alyra
Alyra is not a palindrome
*/

const revert = (str) => str.split('').reverse().join('')

if (process.argv.length !== 3) {
    console.log('error: pas le bon nomber')
    process.exit(1)
}
const pal = process.argv[2]

if (pal === revert(pal)) {
    console.log(`${pal} is a palindrome`)
} else {
    console.log(`${pal} is not a palindrome`)
}
