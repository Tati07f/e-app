import Link from "next/link";


const FooterItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <div 
            // className={style.footer_item }
            >
                {text}
            </div>
        </Link>
    );
};
export default FooterItem;