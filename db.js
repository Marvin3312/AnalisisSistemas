import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();
const user = "sa";
const pass = "root96";
const dbConfig = {
  server: "localhost",
  database: "analisis",
  options: {
    trustServerCertificate: true,
  },
  port: 1434,
  authentication: {
    type: "default",
    options: {
      userName: user,
      password: pass,
    },
  },
};


// Define an asynchronous function to connect to the database
async function connectDB() {
  try {
    // Attempt to establish a connection to the SQL Server using the provided configuration
    const pool = await mssql.connect(dbConfig);
    
    // Log a success message if the connection is established
    console.log("Connection to SQL Server successful");
    
    // Return the connection pool for use in other parts of the application
    return pool;
  } catch (err) {
    // Log an error message if the connection fails
    console.error("Error connecting to SQL Server:", err);
    
    // Re-throw the error to handle it elsewhere if needed
    throw err;
  }
}

export default connectDB;