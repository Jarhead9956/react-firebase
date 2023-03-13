import React from "react";
import { NavLink } from "react-router-dom";
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
                    <li>
                        <NavLink 
                            to='/login'
                            className={({ isActive }) =>
                            isActive ? styles.active : undefined
                            }
                            end
                        >
                            Log in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/register'
                            className={({ isActive }) =>
                            isActive ? styles.active : undefined
                            }
                        >
                                Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/'
                            className={({ isActive }) =>
                            isActive ? styles.active : undefined
                            }
                        >
                            My notes
                        </NavLink>
                    </li>
                    <li>Sign out</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;