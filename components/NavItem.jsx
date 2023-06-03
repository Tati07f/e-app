import Link from "next/link";
import style from '../styles/footer.module.css'


const NavItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <div className={style.text_links}>
                {text }
            </div>
        </Link>
    );
};
export default NavItem;