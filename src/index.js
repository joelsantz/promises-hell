import './styles.css';
import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';


const heroId = 'capi';
const heroId2 = 'iron';

// searchHero( heroId, ( err, hero1 ) => {

//     if( err ) { return console.error( err ); }

//     searchHero( heroId2, ( err, hero2 ) => {
//         if( err ) { return console.error( err ); }
    
//         console.log(`Enviando a ${hero1.name} y ${hero2.name}`);
        
//     });

// });

searchHero( heroId ).then( hero => {
    console.log(`Sending  ${hero.name} to the mission`);
});

console.log('fin del programa');

