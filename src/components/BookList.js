// import BookItem from "./BookItem";
import { NavLink } from "react-router-dom";

function BookList({bookID}) {

    return (
        <div className="panel panel-success">
            <div className="panel-heading heading-color">Danh sách Book</div>
            <div style={{display: "flex"}}>
                <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm</NavLink>
                <NavLink exact to={`/book/edit/${bookID}`} className='btn-update' id="btn-update">Chỉnh Sửa</NavLink>
                <button className='btn-delete' id="btn-delete">Xóa</button>
            </div>
            <div className="panel-body">
                <table cellPadding="3" cellSpacing="0" border="0" className='search-by-fields'>
                    <thead>
                        <tr>
                            <th style={{paddingBottom: 15 + 'px', fontSize: 15 + 'px'}}>Tìm kiếm theo:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="filter_col2" data-column="0">
                            <td>Mã sách</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col0_filter" /></td>
                        </tr>
                        <tr id="filter_col3" data-column="1">
                            <td>Tên sách</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col1_filter" /></td>
                        </tr>
                        <tr id="filter_col5" data-column="2">
                            <td>Tóm tắt</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col2_filter" /></td>
                        </tr>
                        <tr id="filter_col6" data-column="3">
                            <td>Link</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col3_filter" /></td>
                        </tr>
                        <tr id="filter_col6" data-column="4">
                            <td>Ngày xuất bản</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col4_filter" /></td>
                        </tr>
                        <tr id="filter_col6" data-column="5">
                            <td>Nhà xuất bản</td>
                            <td align="center"><input style={{marginBottom: 5 + 'px'}} type="text" className="column_filter" id="col5_filter" /></td>
                        </tr>
                        <tr id="filter_col6" data-column="6">
                            <td>Tên tác giả</td>
                            <td align="center"><input type="text" className="column_filter" id="col6_filter" /></td>
                        </tr>
                    </tbody>
                </table>
                <table cellSpacing='10' cellPadding='10' className="table table-bordered" id='myTable'>
                    <th></th>
                    <thead className='thead-color'>
                        <tr className="info">
                        <th scope="col">Mã Sách</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Tóm Tắt</th>
                        <th scope="col">Link</th>
                        <th scope="col">Ngày Xuất Bản</th>
                        <th scope="col">Nhà Xuất Bản</th>
                        <th scope="col">Tên Tác Giả</th>
                        {/* <th scope="col">Hành động</th> */}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}


export default BookList