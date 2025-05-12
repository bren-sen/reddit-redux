import { NavLink } from "react-router-dom";


export const Navbar = () => {

    const menu = [
        {id: 1, page: 'Home', url: '/'},
        {id: 2, page: 'Subreddits', url: 'subreddits'},
        {id: 3, page: 'Posts', url: 'posts'},
        {id: 4, page: 'Users', url: 'users'}
    ];

    const listMenu = menu.map(item => {
        return (
            <li key={item.id}>
                <NavLink to={item.url}>{item.page}</NavLink>
            </li>
        )
    });

    return (
        <>
            <h1>Reddit<span>Redux</span></h1>
            <nav className="navbar">
                <ul>
                {listMenu}
                </ul>
            </nav>
        </>
    );
};