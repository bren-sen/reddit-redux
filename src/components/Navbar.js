import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

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
            <li key={item.id} className={styles.li}>
                <NavLink to={item.url} className={styles.links}>{item.page}</NavLink>
            </li>
        )
    });

    return (
        <header className={styles.header}>
            <h1 className={styles.title1}>Reddit<span className={styles.title2}>Redux</span></h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                {listMenu}
                </ul>
            </nav>
        </header>
    );
};