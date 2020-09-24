/* Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et affiche sur le terminal une pyramide comme ci-dessous: */

const showStars = (nbStars) => {
    for (let i = nbStars; i >= 1; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

let newStar = Number(process.argv[2])
showStars(newStar)
