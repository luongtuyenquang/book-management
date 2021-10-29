import { NavLink } from "react-router-dom";

function BookItem(props) {
    const book = props.book

    function handleDelete(){
        props.delete(book.ID)
    }

    return (
        <tr>
            {/* <td>{book.ID}</td> */}
            <td>{book.Ma}</td>
            <td>{book.Ten}</td>
            <td>{book.HinhBia}</td>
            <td>{book.TomTat}</td>
            <td>{book.Link}</td>
            <td>{book.NgayXuatBan}</td>
            <td>{book.NhaXuatBan}</td>
            <td>{book.TenTacGia}</td>
            <td>{book.NgayTao}</td>
            <td>
                <NavLink exact to={`/book/edit/${book.ID}`} type="button" className="btn btn-success mr-10">Sửa</NavLink>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
            </td>
        </tr>
    );
}

export default BookItem;
