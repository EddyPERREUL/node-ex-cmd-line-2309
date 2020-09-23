/* 
Ecrivez une programme counter qui prend 3 arguments en ligne de commande:

un nombre min pour le début du counter
un nombre max pour la fin du counter
un nombre step pour le pas/interval du counter
L'execution de ce programme devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step:
*/

const counter = () => {
    if (process.argv.length != 5) {
        console.log('error : use 3 arguments')
        process.exit(1)
    } if (isNaN(process.argv[2, 3, 4])) {
        console.log('error : use only numbers')
        process.exit(1)
    }

    let min = Number(process.argv[2])
    let max = Number(process.argv[3])
    let step = Number(process.argv[4])

    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}
counter()
