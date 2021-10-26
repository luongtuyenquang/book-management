import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink exact to='/' >Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to='/book' >Quản lý Book</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
