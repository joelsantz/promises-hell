import { searchHero, searchHeroAsync } from './js/promises';

searchHero( 'capi2' )
    .then( hero => console.log(hero) )
    .catch( console.warn );
    


searchHeroAsync( 'iron2' )
    .then( hero => console.log(hero) )
    .catch( console.warn );
