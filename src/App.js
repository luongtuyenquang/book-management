import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import AddBookModal from './components/AddBookModal';
import { useState } from 'react';

function App() {

    const [status, setStatus] = useState(false)
    function handleModalForm(){
        setStatus(!status)
    }
    return (
        <div className="App">
            <Header />
            <button type="button" className="btn btn-info mr-add" onClick={handleModalForm}>Thêm sách</button>
            { status && <AddBookModal modal={handleModalForm}/> }
            <BookList />
        </div>
    );
}

export default App;
