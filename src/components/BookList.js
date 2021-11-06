import { useState } from "react/cjs/react.development";
import BookItem from "./BookItem";


function BookList(props) {
    const renderBook = props.page.map((book, index) => {
        return <BookItem book={book} key={index} delete={props.delete}/>
    })

    return (
        <div className="panel panel-success">
            <div className="panel-heading heading-color">Danh sách Book</div>
            
            <div className="panel-body">
                <table className="table table-bordered">
                    <thead>
                        <tr className="info">
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">Mã Sách</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Hình Bìa</th>
                        <th scope="col">Tóm Tắt</th>
                        <th scope="col">Link</th>
                        <th scope="col">Ngày Xuất Bản</th>
                        <th scope="col">Nhà Xuất Bản</th>
                        <th scope="col">Tên Tác Giả</th>
                        <th scope="col">Ngày Tạo</th>
                        <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderBook }
                    </tbody>
                </table>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='mr-10' onClick={props.prevPage}><i className="fas fa-angle-left"></i></button>
                {props.numberPagination()} 
                <button onClick={props.nextPage}><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    );
}


export default BookList