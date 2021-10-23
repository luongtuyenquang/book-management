import { useState } from "react"
// import { useHistory } from 'react-router-dom';
const axios = require('axios');

export default function AddBookModal(props){
    // const history = useHistory()
    const [value, setValue] = useState({
        txtMaSP: '',
        txtTenSP: '',
        txtHinhBia: '',
        txtTomTat: '',
        txtLink: '',
        txtNgayXuatBan: '',
        txtNhaXuatBan: '',
        txtTenTacGia: '',
        txtDaXoa: '',
        txtNgayTao: '',
        txtNguoiTao: '',
        txtNgaySua: '',
        txtNguoiSua: '',
        txtNgayXoa: '',
        txtNguoiXoa: ''
    })
    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setValue(preState => ({
            ...preState,
            [name]: value
        }))
    }

    function handleSubmitForm(e){
        e.preventDefault()

        const newValue = {
            Ma: value.txtMaSP, 
            Ten: value.txtTenSP, 
            HinhBia: value.txtHinhBia, 
            TomTat: value.txtTomTat, 
            Link: value.txtLink, 
            NgayXuatBan: value.txtNgayXuatBan, 
            NhaXuatBan: value.txtNhaXuatBan, 
            TenTacGia: value.txtTenTacGia, 
            DaXoa: value.txtDaXoa,
            NgayTao: value.txtNgayTao, 
            NguoiTao: value.txtNguoiTao, 
            NgaySua: value.txtNgaySua,
            NguoiSua: value.txtNguoiSua,
            NgayXoa: value.txtNgayXoa,
            NguoiXoa: value.txtNguoiXoa
        }
        axios.post('http://localhost:8000/book', newValue)
          .then(function (response) {
              // history.goBack()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='modal-form'>
            <form onSubmit={handleSubmitForm} className='form'>
                <div className='form-flex'>
                    <div className='mr-15'>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputEmail1">Mã sản phẩm</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                name='txtMaSP'
                                value={value.txtMaSP}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Tên sản phẩm</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtTenSP'
                                value={value.txtTenSP}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Hình Bìa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtHinhBia'
                                value={value.txtHinhBia}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Tóm tắt</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtTomTat'
                                value={value.txtTomTat}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Link</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtLink'
                                value={value.txtLink}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Ngày xuất bản</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNgayXuatBan'
                                value={value.txtNgayXuatBan}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Nhà xuất bản</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNhaXuatBan'
                                value={value.txtNhaXuatBan}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Tên tác giả</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtTenTacGia'
                                value={value.txtTenTacGia}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Đã Xóa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtDaXoa'
                                value={value.txtDaXoa}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Ngày tạo</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNgayTao'
                                value={value.txtNgayTao}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Người tạo</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNguoiTao'
                                value={value.txtNguoiTao}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Ngày Sửa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNgaySua'
                                value={value.txtNgaySua}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Người sửa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNguoiSua'
                                value={value.txtNguoiSua}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Ngày Xóa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNgayXoa'
                                value={value.txtNgayXoa}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">Người xóa</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNguoiXoa'
                                value={value.txtNguoiXoa}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <div className='btn-group'>
                    <button type="submit" className="btn btn-danger mr-10" onClick={props.modal}>Thoát</button>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
                </div>
                
            </form>
        </div>
    )
}