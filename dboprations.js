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
            '${book.NgayXuatBan}', '${book.NhaXuatBan}', '${book.TenTacGia}', ${book.DaXoa}, '${book.NgayTao}', 
            '${book.NguoiTao}', '${book.NgaySua}', '${book.NguoiSua}', '${book.NgayXoa}', '${book.NguoiXoa}')
        `)
        return books.recordset
    }
    catch (error){
        console.log(error);
    }
}

// Delete Book
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

// Update Book
async function updateEvent(BookID, eventData){
    try{
        let pool = await sql.connect(config)
        let update = await pool.request()
            .input('id_param', sql.Int, BookID)
            .input('Ma', sql.NVarChar(50), eventData.Ma)
            .input('Ten', sql.NVarChar(100), eventData.Ten)
            .input('HinhBia', sql.NVarChar(1000), eventData.HinhBia)
            .input('TomTat', sql.NVarChar(100), eventData.TomTat)
            .input('Link', sql.NVarChar(1000), eventData.Link)
            .input('NgayXuatBan', sql.DateTime, eventData.NgayXuatBan)
            .input('NhaXuatBan', sql.NVarChar(100), eventData.NhaXuatBan)
            .input('TenTacGia', sql.NVarChar(1000), eventData.TenTacGia)
            .input('NgayTao', sql.DateTime, eventData.NgayTao)
            .query("UPDATE dbo.Sach SET Ma = @Ma, Ten = @Ten, HinhBia = @HinhBia, TomTat = @TomTat, Link = @Link, NgayXuatBan = @NgayXuatBan, NhaXuatBan = @NhaXuatBan, TenTacGia = @TenTacGia, NgayTao = @NgayTao WHERE ID = @id_param")
        return update.recordset
    }catch(error){
        res.send(error.massage)
    }
}

module.exports = {
    createBook,
    getOrders,
    getOrder,
    deleteBook,
    updateEvent
}