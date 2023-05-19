import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
function Nav() {
    return (
        <>
            <nav>
                <div className={styles.nabar}>
                    <div className={styles.navbarList}>
                        <ul className={styles.navbarList}>
                            <li className={styles.navbarItem}>
                                <Link
                                    className={styles.navbarLink}
                                    href="#"
                                //   onClick={() => setOpenMenu(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/about">
                                    About
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/movie">
                                    Movie
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link className={styles.navbarLink} href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
