import BookList from "../BookList";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

const axios = require('axios');

export default function Book() {
   
    const [books, setBook] = useState([])

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)
           setBook(res.data)
       }
       fetchAPI()
   }, [])

    function handleDelete(id){
        axios.delete(`http://localhost:8000/book/${id}`)
        const newBookList = books.filter((book) => {
            return book.ID !== id
        })
        setBook(newBookList)
    }

    return (
        <div>
            <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm sách</NavLink>
            <BookList books={books} delete={handleDelete}/>

        </div>
    );
}