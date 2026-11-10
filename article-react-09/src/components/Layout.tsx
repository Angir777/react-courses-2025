import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                   <button>Home</button>
                </NavLink>
                <NavLink to="/user/1" className={({ isActive }) => (isActive ? "active" : "")}>
                    <button>User</button>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                    <button>Contact</button>
                </NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout