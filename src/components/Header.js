import { NavLink } from "react-router-dom";
import admin from '../uploads/admin.jpg'

function Header() {
    return (
        <header className='header'>
            <div className='avatar'>
                <img src={admin} alt='' />
                <NavLink to='#1' >Lương Tuyên Quang</NavLink>
            </div>
            <nav className="navbar navbar-inverse navbar-custom">
                <div className="collapse navbar-collapse pd-0" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav witdh-full">
                        <li>
                            <NavLink activeClassName='header-active' exact to='/book' >Quản lý Book</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='header-active' exact to='/phan' >Quản lý Phân loại Book</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
