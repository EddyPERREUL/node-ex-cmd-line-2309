/* 
Ecrivez une programme counter qui prend 3 arguments en ligne de commande:

un nombre min pour le début du counter
un nombre max pour la fin du counter
un nombre step pour le pas/interval du counter
L'execution de ce programme devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step:
*/

const counter = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

if (process.argv.length != 5) {
    console.log('error : not argument')
    process.exit(1)
}

if (
    isNaN(process.argv[2]) ||
    isNaN(process.argv[3]) ||
    isNaN(process.argv[4])
) {
    console.log('error : use only numbers')
    process.exit(1)
}

const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

counter(min, max, step)
