import sql from 'mssql'


//ADDING A USER
export const addUser = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('id', sql.Int, id)
            .input('fullName', sql.VarChar, fullName)
            .input('email', sql.VarChar, email)
            .input('mobileNo', sql.VarChar, mobileNo)
            .input('workNo', sql.VarChar, workNo)
            .input('address', sql.VarChar, address)
            .input('groupId', sql.Int, groupId)
            .query('INSERT INTO Contacts (id,fullName, email, mobileNo, workNo, address, groupId) VALUES (@id, @fullName, @email, @mobileNo, @workNo, @address, @groupId)')
            res.status(200).send('added successfully')

    } catch (error) {
        res.status(400).json(error);

        
    } finally {
        sql.close();

    }
}

//UPDATING A USER
export const updateUser = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const { id } = req.params;
        await pool.request()
            .input('id', sql.Int, id) 
            .input('fullName', sql.VarChar, fullName) 
            .query('UPDATE Contacts SET fullName = @fullName WHERE id = @id');
            res.status(200).send('updated successfully');

    } catch (error) {
        res.status(400).json(error);

        
    } finally {
        sql.close();

    }

}

//GET ALL USERS
export const checkUser = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .query('SELECT * FROM Contacts')
            res.status(200).json(result.recordset)

    } catch (error) {
        res.status(400).json(error);

        
    } finally {
        sql.close();

    }

}
 //DELETING A USER
export const deleteUser = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('id', sql.Int, id) 
            .query('DELETE FROM Contacts WHERE id = @id')
            res.status(200).send('deleted successfully')

    } catch (error) {
        res.status(400).json(error);

        
    } finally {
        sql.close();

    }

}