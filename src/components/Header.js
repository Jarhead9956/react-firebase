import React from "react";
import styles from './Header.module.css';

const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU';

const Header = () => {
    return(
        <div className={styles["nav-container"]}>
            <div className={styles.logo}>
                <img src={logoUrl} />
            </div>
            <div className={styles["menu-container"]}>
                <ul>
                    <li>Log in</li>
                    <li>Register</li>
                    <li>My notes</li>
                    <li>Sign out</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;