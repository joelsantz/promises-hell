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

export const searchHeroAsync = async(heroId) => {
    const hero = heros[heroId];
    if( hero ) {
        return hero;
    } else {
        throw `No existe Heroe con el id ${heroId}`;
    }
}

const slowPromise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Slow promise'), 2000);
});

const mediumPromise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Medium promise'), 1500);
});

const fastPromise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Fast promise'), 1000);
});


export {
    slowPromise,
    mediumPromise,
    fastPromise
}