import {countryList} from './countryList.js';

let country = `My Country name is ${countryList[18].name}`;
console.log(country);

countryList.map( item => {

   let yourCountries =`Your Country name is ${item.name}`;
   console.log(yourCountries);

});