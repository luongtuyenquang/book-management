
function BookItem(props) {
    const book = props.books

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
            <td>{book.NguoiTao}</td>
            <td>
                <button type="button" className="btn btn-success mr-10">Sửa</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
            </td>
        </tr>
    );
}

export default BookItem;
