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

export const searchHero = (heroId) => {
    const hero = heros[heroId];

    return new Promise( ( resolve, reject ) => {
        if( hero ) {
            resolve( hero );
        } else {
            reject(`No existe Heroe con el id ${heroId}`);
        }

    });

}