import BookList from "../BookList";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import $, { data } from "jquery"
window.jQuery = $
window.jquery = $

const axios = require('axios');

export default function Book() {

    let id = ''

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)

           const dataSet = res.data

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

        $(document).ready(function() {
            var table = $('#myTable').DataTable();
         
            $('#myTable tbody').on( 'click', 'tr', function () {
                if ( $(this).hasClass('selected') ) {
                    $(this).removeClass('selected');
                    
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                    var data = table.row( this ).data();
                    id = data.ID
                }
            } );
         
            $('#button').click( function () {
                table.row('.selected').remove().draw( false );
                axios.delete(`http://localhost:8000/book/${id}`)
                const newBookList = dataSet.filter((data) => {
                    return data.ID !== id
                })
                return newBookList
            } );
        } );

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


    return (
        <div className='navbar-right'>
            <div className='search'>
                <h4>Quản lý Sách</h4>
            </div>
            <NavLink to='/book/add' type="button" className="btn btn-info mr-add">Thêm sách</NavLink>
        
            <BookList />

        </div>
    );
}