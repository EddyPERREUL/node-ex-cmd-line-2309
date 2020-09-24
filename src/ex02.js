'use strict'

/* Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande plusieures string et les affiche dans l'ordre inverse de leur ordre d'entrée:

% node showArgs.js 1 2 3 Soleil
Soleil
3
2
1
*/

const showArgs = () => {
    if (process.argv.length <= 2) {
        console.log('error : not argument')
        process.exit(1)
    } 
    const inputs = process.argv.slice(2).reverse()
    for (let i = 0 ; i < inputs.length ; i += 1) {
        console.log(inputs[i])
    }  
}
showArgs()

