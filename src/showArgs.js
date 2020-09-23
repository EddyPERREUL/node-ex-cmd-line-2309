'use strict'

/* Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande plusieures string et les affiche dans l'ordre inverse de leur ordre d'entrée:

% node showArgs.js 1 2 3 Soleil
Soleil
3
2
1
*/

const showArgs = () => {
    const inputs = process.argv
    const [ , , ...rest ] = inputs
    const msgError = 'error : not argument'
    if (inputs.length <= 2) {
        return msgError
    } else {
        return rest.reverse()
    }  
}
showArgs()


console.log(
    showArgs()
)