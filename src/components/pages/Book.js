import BookList from "../BookList";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

const axios = require('axios');

export default function Book() {
   
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)
           setBooks(res.data)
       }
       fetchAPI()
   }, [])

    function handleDelete(id){
        axios.delete(`http://localhost:8000/book/${id}`)
        const newBookList = books.filter((book) => {
            return book.ID !== id
        })
        setBooks(newBookList)
    }

    const filter = books.filter(book => {
        return book.Ten.toLowerCase().includes(search.toLowerCase()) || book.TenTacGia.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm sách</NavLink>
            <div className="form-group">
                Tìm kiếm:
                <input 
                    type="text" 
                    className="form-control input-search" 
                    placeholder='Nhập tên sách hoặc tên tác giả' 
                    id="exampleInputName2" 
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
            <BookList books={filter} delete={handleDelete} />

        </div>
    );
}