const config = require('./dbconfig')
const sql = require('mssql')

async function getOrders(){
    try{
        let pool = await sql.connect(config)
        let book = await pool.request().query("SELECT * FROM dbo.Sach")
        console.log('Connect success');
        return book.recordset
    }
    catch (error){
        console.log(error);
    }
}

async function getOrder(BookID){
    try{
        let pool = await sql.connect(config)
        let book = await pool.request()
            .input('id_param', sql.Int, BookID)
            .query("SELECT * FROM dbo.Sach where ID = @id_param")
        return book.recordset
    }
    catch (error){
        console.log(error);
    }
}

// Create Book
async function createBook(book){
    try{
        let pool = await sql.connect(config)
        let books = await pool.request()
        .query(`INSERT INTO dbo.Sach VALUES
            ('${book.Ma}', '${book.Ten}', '${book.HinhBia}', '${book.TomTat}', '${book.Link}', 
            ${book.NgayXuatBan}, '${book.NhaXuatBan}', '${book.TenTacGia}', ${book.DaXoa}, ${book.NgayTao}, 
            '${book.NguoiTao}', '${book.NgaySua}', '${book.NguoiSua}', ${book.NgayXoa}, '${book.NguoiXoa}')
        `)
        return books.recordset
    }
    catch (error){
        console.log(error);
    }
}

async function deleteBook(BookID){
    try{
        let pool = await sql.connect(config)
        let book = await pool.request()
            .input('id_param', sql.Int, BookID)
            .query("DELETE FROM dbo.Sach where ID = @id_param")
        return book.recordset
    }
    catch (error){
        console.log(error);
    }
}

module.exports = {
    createBook,
    getOrders,
    getOrder,
    deleteBook
}