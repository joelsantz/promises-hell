import './styles.css';
import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';


const heroId1 = 'capi1';
const heroId2 = 'iron';

// searchHero( heroId, ( err, hero1 ) => {

//     if( err ) { return console.error( err ); }

//     searchHero( heroId2, ( err, hero2 ) => {
//         if( err ) { return console.error( err ); }
    
//         console.log(`Enviando a ${hero1.name} y ${hero2.name}`);
        
//     });

// });

// searchHero( heroId ).then( hero1 => {
//     // console.log(`Sending  ${hero.name} to the mission`);
//     searchHero( heroId2 ).then( hero2 => {
//         console.log(`Sending ${hero1.name} and ${hero2.name} to the mission`);
//     });
// });

Promise.all([ searchHero(heroId1), searchHero(heroId2) ])
    .then( ([hero1, hero2])  => {
    console.log(`Sending ${hero1.name} and ${hero2.name} to the mission`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('finally');
})

console.log('fin del programa');

