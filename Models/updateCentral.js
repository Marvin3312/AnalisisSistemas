import mssql from "mssql";
import connectDB from "../db.js";

const updateCentral = async (central) => {
  try {
    // Connect to the database
    const pool = await mssqlsql.connect(connectDB);

    // Execute the stored procedure
    const result = await pool
      .request()
      .input('id_central', sql.Int, central.id_central) // ID of the central to update
      .input('name_central', sql.NVarChar, central.name_central) // New name
      .input('address_central', sql.NVarChar, central.address_central) // New address
      .input('phone_central', sql.NVarChar, central.phone_central) // New phone
      .input('email_central', sql.NVarChar, central.email_central) // New email
      .execute('UpdateCentral'); // Name of the stored procedure

    // Return the result
    return result;
  } catch (err) {
    console.error('Error updating central:', err);
    throw new Error('Error updating central');
  }
};

