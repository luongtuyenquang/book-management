import BookList from "../BookList";
import { useEffect, useState } from 'react';
import $, { data } from "jquery"
window.jQuery = $
window.jquery = $

const axios = require('axios');

export default function Book() {

    const [bookID, setBookID] = useState('')

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)

           const dataSet = res.data

            let id = ''

            // Pagination
           $(document).ready(function() {
            // $.noConflict();
            $('#myTable').DataTable( {
                data: dataSet,
                columns: [
                    { data: "Ma" },
                    { data: "Ten" },
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
                    setBookID(id)
                }
            } );
            
            // Delete
            $('#btn-delete').click( function () {
                table.row('.selected').remove().draw( false );
                axios.delete(`http://localhost:8000/book/${id}`)
                const newBookList = dataSet.filter((data) => {
                    return data.ID !== id
                })
                return newBookList
            } );

            // Update
            $('#btn-update').click( function () {
                table.row('.selected').remove().draw( false );
            } );

            // Search by Fields
            function filterGlobal () {
                $('#myTable').DataTable().search(
                    $('#global_filter').val(),
                ).draw();
            }
             
            function filterColumn ( i ) {
                $('#myTable').DataTable().column( i ).search(
                    $('#col'+i+'_filter').val(),
                ).draw();
            }
             
            $(document).ready(function() {
                $('#myTable').DataTable();
             
                $('input.global_filter').on( 'keyup click', function () {
                    filterGlobal();
                } );
             
                $('input.column_filter').on( 'keyup click', function () {
                    filterColumn( $(this).parents('tr').attr('data-column') );
                } );
            } );

        } );

       }
       fetchAPI()
   }, [])

    return (
        <div className='navbar-right'>
            <BookList bookID={bookID} />
        </div>
    );
}