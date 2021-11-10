import BookList from "../BookList";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

const axios = require('axios');

export default function Book() {
   
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState([])
    const [numberPage, setNumberPage] = useState(0)
    const [activePage, setActivePage] = useState(1)
    const pageSize = 5
    const pageEnd = books.length / pageSize

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)
           setBooks(res.data)
           setPage(res.data.slice(0, 5))
           setNumberPage(res.data.length / pageSize)
       }
       fetchAPI()
   }, [])

   function numberPagination(number){
    const arr = []
    for(let i = 1; i <= number; i++){
        arr.push(i)
    }
    return arr.map((elm, index) => {
        return (
            <div key={index}>
                <button className={`mr-10 default ${elm === activePage ? 'active-page' : ''}`} onClick={() => handleSwitchPage(elm)}>{elm}</button>
            </div>
            )
        })
    }

    function prevPage(){
        handleSwitchPage(activePage - 1)
    }
    function nextPage(){
        handleSwitchPage(activePage + 1)
    }

    function handleSwitchPage(number, arr){
        const end = pageSize * number
        setPage(books.slice(end - pageSize, end))
        setActivePage(number)
    }

    function handleDelete(id){
        axios.delete(`http://localhost:8000/book/${id}`)
        const newBookList = page.filter((book) => {
            return book.ID !== id
        })
        setPage(newBookList)
        setTimeout(`window.location.href="/book"`,150);
    }

    const filter = page.filter(book => {
        return book.Ma.toLowerCase().includes(search.toLowerCase()) 
            || book.Ten.toLowerCase().includes(search.toLowerCase())
            || book.HinhBia.toLowerCase().includes(search.toLowerCase())
            || book.TomTat.toLowerCase().includes(search.toLowerCase())
            || book.Link.toLowerCase().includes(search.toLowerCase())
            || book.NgayXuatBan.toLowerCase().includes(search.toLowerCase())
            || book.NhaXuatBan.toLowerCase().includes(search.toLowerCase())
            || book.TenTacGia.toLowerCase().includes(search.toLowerCase())
            || book.NgayTao.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm sách</NavLink>
            <div className="form-group search-form">
                Tìm kiếm:
                <input 
                    type="text" 
                    className="form-control input-search" 
                    placeholder='Nhập giá trị cần tìm kiếm' 
                    id="exampleInputName2" 
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
            <BookList delete={handleDelete} pageEnd={pageEnd} activePage={activePage} prevPage={prevPage} nextPage={nextPage} page={filter} numberPagination={()=>numberPagination(Math.ceil(numberPage))} />

        </div>
    );
}