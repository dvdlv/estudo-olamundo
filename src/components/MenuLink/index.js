import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink ({children, to}) {
    

    return (
        // <Link className={`
        //         ${styles.link}
        //         ${localizacao.pathname === to ? styles.linkDestacado : ""}
        //     `} 
        //     to={to}>
        //         {children}
        // </Link>
        <NavLink
        className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.linkDestacado  : "" }` 
            }
            to={to}
            end
        >
            {children}
        </NavLink>
        
    )
}