import { useState, useEffect } from "react"

const axios = require('axios');
export default function AddBookModal(props){

    const [value, setValue] = useState({
        id: '',
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

    const id = props.update.ID
    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`)
            .then(function (res) {
                const data = res.data
                setValue({
                    id: data.ID,
                    txtMaSP: data.Ma,
                    txtTenSP: data.Ten,
                    txtHinhBia: data.HinhBia,
                    txtTomTat: data.TomTat,
                    txtLink: data.Link,
                    txtNgayXuatBan: data.NgayXuatBan,
                    txtNhaXuatBan: data.NhaXuatBan,
                    txtTenTacGia: data.TenTacGia,
                    txtDaXoa: data.DaXoa,
                    txtNgayTao: data.NgayTao,
                    txtNguoiTao: data.NguoiTao,
                    txtNgaySua: data.NgaySua,
                    txtNguoiSua: data.NguoiSua,
                    txtNgayXoa: data.NgayXoa,
                    txtNguoiXoa: data.NguoiXoa
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setValue(preState => ({
            ...preState,
            [name]: value
        }))
    }
    
    function handleSubmitForm(e){
        const id = props.update.ID
        // e.preventDefault()

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
        if(id){
            axios.put(`http://localhost:8000/book/${id}`, newValue)
            .then(function (response) {
                // history.goBack()
                console.log(value);
            })
        }else{
            axios.post('http://localhost:8000/book', newValue)
            .then(function (response) {
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <div className='modal-form'>
            <form onSubmit={handleSubmitForm} className='form'>
                <div className='form-flex'>
                    <div className='mr-15'>
                        {/* <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                name='id'
                                value={value.id}
                                onChange={handleChange}
                            >
                            </input>
                        </div> */}
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
                    <button type="button" className="btn btn-danger mr-10" onClick={props.modal}>Thoát</button>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
                </div>
                
            </form>
        </div>
    )
}