import BookList from "../BookList";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import $, { data } from "jquery"
window.jQuery = $
window.jquery = $

const axios = require('axios');

export default function Book() {
   
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState([])
    const [numberPage, setNumberPage] = useState(0)
    const [activePage, setActivePage] = useState(1)
    const pageSize = 5
    const pageEnd = books.length / pageSize
    const [datas, setDatas] = useState([])

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)
           setBooks(res.data)
           setPage(res.data.slice(0, pageSize))
           setNumberPage(res.data.length / pageSize)

           const dataSet = res.data
           setDatas(dataSet)
           $(document).ready(function() {
            // $.noConflict();
            $('#myTable').DataTable( {
                data: dataSet,
                columns: [
                    { data: "" },
                    { data: "Ma" },
                    { data: "Ten" },
                    { data: "HinhBia" },
                    { data: "TomTat" },
                    { data: "Link" },
                    { data: "NgayXuatBan" },
                    { data: "NhaXuatBan" },
                    { data: "TenTacGia" }
                ],
            } );
        } );

        // $(document).ready(function() {
        //     var table = $('#myTable').DataTable();
         
        //     $('#myTable tbody').on( 'click', 'tr', function () {
        //         if ( $(this).hasClass('selected') ) {
        //             $(this).removeClass('selected');
        //         }
        //         else {
        //             table.$('tr.selected').removeClass('selected');
        //             $(this).addClass('selected');
        //         }
        //     } );
         
        //     $('#button').click( function () {
        //         table.row('.selected').remove().draw( false );
        //     } );
        // } );

        $(document).ready(function() {
            var t = $('#myTable').DataTable( {
                "columnDefs": [ {
                    "searchable": false,
                    "orderable": false,
                    "targets": 0,     
                } ],
                "order": [[ 1, 'asc' ]]
            } );
         
            t.on( 'order.dt search.dt', function () {
                t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                    cell.innerHTML = i+1;
                } );
            } ).draw();
        } );

       }
       fetchAPI()
   }, [])

//    function numberPagination(number){
//     const arr = []
//     for(let i = 1; i <= number; i++){
//         arr.push(i)
//     }
//     return arr.map((elm, index) => {
//         return (
//             <div key={index}>
//                 <button className={`mr-10 default ${elm === activePage ? 'active-page' : ''}`} onClick={() => handleSwitchPage(elm)}>{elm}</button>
//             </div>
//             )
//         })
//     }

//     function prevPage(){
//         handleSwitchPage(activePage - 1)
//     }
//     function nextPage(){
//         handleSwitchPage(activePage + 1)
//     }

//     function handleSwitchPage(number, arr){
//         const end = pageSize * number
//         setPage(books.slice(end - pageSize, end))
//         setActivePage(number)
//     }

    function handleDelete(id){
        // console.log(id);
        // axios.delete(`http://localhost:8000/book/${id}`)
        // const newBookList = page.filter((book) => {
        //     return book.ID !== id
        // })
        // return newBookList
        // setTimeout(`window.location.href="/book"`,150);
    }

    // const filter = page.filter(book => {
    //     return book.Ma.toLowerCase().includes(search.toLowerCase()) 
    //         || book.Ten.toLowerCase().includes(search.toLowerCase())
    //         || book.HinhBia.toLowerCase().includes(search.toLowerCase())
    //         || book.TomTat.toLowerCase().includes(search.toLowerCase())
    //         || book.Link.toLowerCase().includes(search.toLowerCase())
    //         || book.NgayXuatBan.toLowerCase().includes(search.toLowerCase())
    //         || book.NhaXuatBan.toLowerCase().includes(search.toLowerCase())
    //         || book.TenTacGia.toLowerCase().includes(search.toLowerCase())
    //         || book.NgayTao.toLowerCase().includes(search.toLowerCase())
    // })

    return (
        <div className='navbar-right'>
            <div className='search'>
                <h4>Quản lý Sách</h4>
                {/* <div className="form-group search-form">
                    <label>Tìm kiếm:</label>
                    <input 
                        type="text" 
                        className="form-control input-search" 
                        placeholder='Nhập giá trị cần tìm kiếm' 
                        id="exampleInputName2" 
                        onChange={(e)=> setSearch(e.target.value)}
                    />
                </div> */}
            </div>
            <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm sách</NavLink>
            
            {/* pageEnd={pageEnd} activePage={activePage}  page={filter} books={books} */}
            {/* prevPage={prevPage} nextPage={nextPage} numberPagination={()=>numberPagination(Math.ceil(numberPage))}*/}
            <BookList datas={datas} delete={handleDelete}  />

        </div>
    );
}