//Header containing background image
//Name Overlays image

import React from "react";
import styles from './Header.module.css'

function Header() {
    const heading = <h1 id={styles.head1}>Daniel Morris</h1>
    return <div className={styles.background}>{heading}</div>
}

export default Header;