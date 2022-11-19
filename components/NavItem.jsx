import Link from "next/link";
import style from '../styles/navbar.module.css'


const NavItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <div 
            className={style.nav_item }
            >
                {text}
            </div>
        </Link>
    );
};
export default NavItem;