import { NavLink } from "react-router-dom";

function BookItem(props) {
    const book = props.book
    const books = props.books
    const id = book.ID
    
    function handleDelete(){
        props.delete(book.ID)
    }

    const findIndex = books.map((book, index) => {
        if(book.ID === id) return index + 1
    })

    return (
        <tr>
            <td>{findIndex}</td>
            <td>{book.Ma}</td>
            <td>{book.Ten}</td>
            <td>{book.HinhBia}</td>
            <td>{book.TomTat}</td>
            <td>{book.Link}</td>
            <td>{book.NgayXuatBan.slice(0, 10)}</td>
            <td>{book.NhaXuatBan}</td>
            <td>{book.TenTacGia}</td>
            <td className='action-flex'>
                <NavLink exact to={`/book/edit/${book.ID}`} type="button" className="btn btn-success mr-10 btn-update">Sửa</NavLink>
                <button type="button" className="btn btn-danger btn-delete" onClick={handleDelete}>Xóa</button>
            </td>
        </tr>
    );
}

export default BookItem;
