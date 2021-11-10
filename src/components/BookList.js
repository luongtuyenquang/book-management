import BookItem from "./BookItem";

function BookList(props) {
    const { activePage, pageEnd } = props

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
                        <th scope="col">ID</th>
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
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20 + 'px'}}>
                <button 
                    className={`mr-10 default size-icon ${activePage === 1 ? 'activeDisabled' : ''}`} 
                    disabled={activePage === 1 ? 'disabled' : ''} 
                    onClick={props.prevPage}
                >
                    <i className="fas fa-angle-left"></i>
                </button>
                {props.numberPagination()} 
                <button 
                    className={`default size-icon ${activePage === Math.ceil(pageEnd) ? 'activeDisabled' : ''}`} 
                    disabled={activePage === Math.ceil(pageEnd) ? 'disabled' : ''} 
                    onClick={props.nextPage}
                >
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
}


export default BookList