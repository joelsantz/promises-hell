import { searchHeroAsync } from './promises';

const heroesId = [ 'capi', 'iron', 'spider' ];

export const getHerosArr = async() => {
    const herosArr = [];

    for( const id of heroesId ) {
        const hero = await searchHeroAsync(id);
        herosArr.push( hero );
    }


    return herosArr;
};