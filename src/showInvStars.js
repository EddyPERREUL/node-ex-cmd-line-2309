/* Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et affiche sur le terminal une pyramide comme ci-dessous: */

const showInvStars = () => {
    const nbStars = Number(process.argv[2])

    for ( let e = nbStars ; e >= 1 ; e -= 1) {
        console.log('*'.repeat(e))
    }
}
showInvStars()