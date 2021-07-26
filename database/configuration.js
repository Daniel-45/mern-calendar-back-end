const mongoose = require('mongoose');

const URI = process.env.DB_CONNECTION;

const databaseConnection = async () => {
    try {
        await mongoose.connect(
            URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            }
        );
        console.log('Conexión a la base de datos realizada con éxito');
    } catch (error) {
        console.log(error);
        throw new Error('No se ha podido realizar la conexión a la base de datos');
    }
}

module.exports = {
    databaseConnection
}