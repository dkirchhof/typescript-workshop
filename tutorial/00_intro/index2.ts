import { transformMeJS } from "./externalLib";
import { transformMeTS } from './externalLib2';

const transformedJS = transformMeJS("?!?!?!", "Max Mustermann???");
console.log(transformedJS);
// Uncaught TypeError: value[transform] is not a function 👎

const transformedJS2 = transformMeJS("toUpperCase", "Max Mustermann???");
console.log(transformedJS2);
// {0: "M", 1: "A", 2: "X", 3: " ", 4: "M", 5: "U", 6: "S", 7: "T", 8: "E", 9: "R", 10: "M", 11: "A", 12: "N", 13: "N", 14: "?", 15: "?", 16: "?"} 👎

const transformedTS = transformMeTS();
console.log(transformedTS);
// {firstname: "MAX", lastname: "MUSTERMANN"} 👍
