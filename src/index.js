import './styles.css';
import {searchHero} from './js/callbacks';


const heroId = 'capi';

searchHero( heroId, ( hero ) => {
    console.log(hero);
});
