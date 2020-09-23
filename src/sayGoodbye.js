'use strict'

/*Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayGoodbye.js React
Goodbye, React*/




const sayGoodbye = () => {
    let name = process.argv[2]
    if (process.argv.length != 3) {
        return 'error : not argument or use on argument'
    } if (!isNaN(name)) {
        return 'error : not use Number'
    }
    return `Goodbye, ${name}`
}

sayGoodbye()

console.log(sayGoodbye())