'use strict'

/*Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayGoodbye.js React
Goodbye, React*/

const sayGoodbye = () => {
    if (process.argv.length != 3) {
        console.log('error : not argument or use on argument')
        process.exit(1)
    }
    if (!isNaN(process.argv[2])) {
        console.log('error : not use Number')
        process.exit(2)
    }
    let name = process.argv[2]
    console.log(`Goodbye, ${name}`)
}
sayGoodbye()
