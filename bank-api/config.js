require('dotenv').config({ path: './.env' }); // Cargar variables de entorno desde el archivo .env

module.exports = {
    dbConfig: {
        user: 'sa',
        password: 'TuPassword123!',
        server: 'localhost',
        port: 1433, // Convertir a número
        database: 'BankDB',
        options: {
            encrypt: false, // Cambiar a false si no usas SSL
            enableArithAbort: true
        }
    }
};

