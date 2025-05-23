import { NavLink } from "react-router-dom";

//Toggle between the top posts and top subreddits of the day
export const Navbar = () => {

    const menu = [
        {id: 1, page: 'Top Posts', url: '/'},
        {id: 2, page: 'Top Subreddits', url: 'subreddits'},
       // {id: 3, page: 'Posts', url: 'posts'},
       // {id: 4, page: 'Users', url: 'users'}
    ];

    const listMenu = menu.map(item => {
        return (
            <li key={item.id}>
                <NavLink to={item.url}>{item.page}</NavLink>
            </li>
        )
    });

    return (
        <header>
            <h1>Reddit<span>Redux</span></h1>
            <nav>
                <ul>
                {listMenu}
                </ul>
            </nav>
        </header>
    );
};