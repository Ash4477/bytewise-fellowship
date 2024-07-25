// const {generateRandomNumber, celsiustoFarenheit} = require('./utils');

// console.log(`Random NUmber: ${generateRandomNumber()}`);
// console.log(`Temp: ${celsiustoFarenheit(23)}`);

import getPosts, {getPostsLength} from "./postController.js";

console.log(getPosts());
console.log(getPostsLength());