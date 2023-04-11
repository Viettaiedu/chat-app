const mongoose = require('mongoose');


async function main() {
 await  mongoose.connect('mongodb+srv://viettaixca123:Reo.2640441@messenger.yjchmhh.mongodb.net/?retryWrites=true&w=majority')
}

main();