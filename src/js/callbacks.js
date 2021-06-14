
const heros = {
    capi: {
        name: 'Capitan america',
        power: 'be strong'
    },
    iron: {
        name: 'Ironman',
        power: 'Dinero, money, luks'
    },
    spider: {
        name: 'Spiderman',
        power: 'Ser una aranha'
    },
}


export const searchHero = ( heroId, callback ) => {
    const hero = heros[heroId];
    if( hero ) {
        callback(null, hero);
    } else {
        callback(`No existe Heroe con el id ${heroId}`);
    }

    //callback( hero );

}