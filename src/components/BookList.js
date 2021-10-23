import BookItem from "./BookItem";
import { useEffect, useState } from 'react';
const axios = require('axios');

function BookList(props) {

    const [books, setBook] = useState([])

     useEffect(() => {
        async function fetchAPI(){
            const url = 'http://localhost:8000/book'
            const res = await axios.get(url)
            setBook(res.data)
        }
        fetchAPI()
    }, [])

    const renderBook = books.map((book, index) => {
        return <BookItem books={book} key={index}/>
    })


    return (
        <div className="panel panel-success">
            <div className="panel-heading heading-color">Danh sách Book</div>
            <div className="panel-body">
            <table className="table table-bordered">
                <thead>
                    <tr className="info">
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Mã SP</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col">Hình Bìa</th>
                    <th scope="col">Tóm Tắt</th>
                    <th scope="col">Link</th>
                    <th scope="col">Ngày Xuất Bản</th>
                    <th scope="col">Nhà Xuất Bản</th>
                    <th scope="col">Tên Tác Giả</th>
                    <th scope="col">Ngày Tạo</th>
                    <th scope="col">Người Tạo</th>
                    <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    { renderBook }
                </tbody>
                </table>
            </div>
        </div>
    );
}


export default BookList