import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import AddBookModal from './components/AddBookModal';
import { useEffect, useState } from 'react';

const axios = require('axios');

function App() {

    const [status, setStatus] = useState(false)
    const [books, setBook] = useState([])
    const [editBook, setEditBook] = useState(null)

    useEffect(() => {
       async function fetchAPI(){
           const url = 'http://localhost:8000/book'
           const res = await axios.get(url)
           setBook(res.data)
       }
       fetchAPI()
   }, [])

    function handleToggleForm(){
        setStatus(!status)
        // setEditBook(null)
    }

    function handleDelete(id){
        axios.delete(`http://localhost:8000/book/${id}`)
        const newBookList = books.filter((book) => {
            return book.ID !== id
        })
        setBook(newBookList)
    }
    
    function openUpdateForm(){
        setStatus(!status)
    }

    function handleUpdate(book){
        setEditBook(book)
        openUpdateForm()
    }
    return (
        <div className="App">
            <Header />
            <button type="button" className="btn btn-info mr-add" onClick={handleToggleForm}>Thêm sách</button>
            { status && <AddBookModal modal={handleToggleForm} update={editBook} /> }
            <BookList books={books} delete={handleDelete} update={handleUpdate}/>
        </div>
    );
}

export default App;
