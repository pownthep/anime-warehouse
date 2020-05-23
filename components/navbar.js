import utilStyles from "../styles/utils.module.css";

export default function Navbar() {
    return (
        <div className={utilStyles.navbar}>
            <a href="" className={utilStyles.navItem}>Animes</a>
            <a href="" className={utilStyles.navItem}>Movies</a>
            <a href="" className={utilStyles.navItem}>TV Shows</a>
        </div>
    );
}