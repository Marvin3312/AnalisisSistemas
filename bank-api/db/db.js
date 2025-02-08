const sql = require('mssql');

// Usar las variables de entorno para la conexión
const config = {
  user: 'sa',
  password:'TuPassword123!' ,
  server: 'localhost',
  database: 'BankDB',
  port:1433,
  options: {
    encrypt: true, // O false, dependiendo de tu configuración
    trustServerCertificate: true, // Asegúrate de usar esto si no tienes un certificado válido
  },
  port: process.env.DB_PORT || 1433, // Asegúrate de que el puerto esté bien configurado
};

// Función para obtener todas las centrales
async function getAllCentrals() {
  try {
    const pool = await sql.connect(config); // Usando la configuración correcta
    const result = await pool.request().query('SELECT * FROM centrals');
    return result.recordset;
  } catch (err) {
    console.error('Error al obtener las centrales:', err);
    throw err;
  }
}

// Función para crear una nueva central
async function createCentral(name, address, phone, email) {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('name_central', sql.NVarChar, name)
      .input('address_central', sql.NVarChar, address)
      .input('phone_central', sql.NVarChar, phone)
      .input('email_central', sql.NVarChar, email)
      .execute('InsertCentral');  // Usando el procedimiento almacenado 'InsertCentral'
    return result;
  } catch (err) {
    console.error('Error al crear la central:', err);
    throw err;
  }
}
module.exports = {
  getAllCentrals,
  createCentral,
};
