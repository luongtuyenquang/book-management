// import BookItem from "./BookItem";
import { NavLink } from "react-router-dom";

function BookList({bookID}) {

    return (
        <div className="panel panel-success">
            <div className="panel-heading heading-color">Danh sách Book</div>
            <button className='btn-delete' id="btn-delete">Xóa</button>
            <NavLink exact to={`/book/edit/${bookID}`} className='btn-update' id="btn-update">Chỉnh Sửa</NavLink>
            <div className="panel-body">
                <table cellSpacing='10' cellPadding='10' className="table table-bordered" id='myTable'>
                    <thead className='thead-color'>
                        <tr className="info">
                        <th scope="col">STT</th>
                        <th scope="col">Mã Sách</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Hình Bìa</th>
                        <th scope="col">Tóm Tắt</th>
                        <th scope="col">Link</th>
                        <th scope="col">Ngày Xuất Bản</th>
                        <th scope="col">Nhà Xuất Bản</th>
                        <th scope="col">Tên Tác Giả</th>
                        {/* <th scope="col">Hành động</th> */}
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default BookList