import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import { useHistory, useRouteMatch } from 'react-router';

const axios = require('axios');

export default function UpdateBookModal(props){

    const [value, setValue] = useState({
        txtID: '',
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

    const match = useRouteMatch()
    const id = match.params.id
    useEffect(() => {
        axios.get(`http://localhost:8000/book/${id}`)
            .then(function (res) {
                const data = res.data
                setValue({
                    txtID: data.ID,
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

    const history = useHistory()

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
        axios.put(`http://localhost:8000/book/${id}`, newValue)
          .then(function (response) {
                history.goBack()
                setTimeout(`window.location.href="/book"`,150);
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
                            <label className='label-form' htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                name='txtID'
                                value={value.txtID}
                                onChange={handleChange}
                                disabled='disabled'
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputEmail1">M?? s???n ph???m</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">T??n s??ch</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">H??nh B??a</label>
                            <input type="file" 
                                // className="form-control" 
                                id="exampleInputFile"
                                name='txtHinhBia'
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">T??m t???t</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng??y xu???t b???n</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Nh?? xu???t b???n</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtNhaXuatBan'
                                value={value.txtNhaXuatBan}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className='width-50'>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">T??n t??c gi???</label>
                            <input type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name='txtTenTacGia'
                                value={value.txtTenTacGia}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="exampleInputPassword1">???? X??a</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng??y t???o</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng?????i t???o</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng??y S???a</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng?????i s???a</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng??y X??a</label>
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
                            <label className='label-form' htmlFor="exampleInputPassword1">Ng?????i x??a</label>
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
                    <NavLink to='/book' type="button" className="btn btn-danger mr-10">Tho??t</NavLink>
                    <button type="submit" className="btn btn-success">L??u l???i</button>
                </div>
                
            </form>
        </div>
    )
}