// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"

// import other react pkg to use
import { HambergerMenu } from "iconsax-react"

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
        <h1 className={styles["nav-title"]}>Les Beaux Moments</h1>
        <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
            {/* <li className={`${styles["nav-item"]} ${styles.active}`}>
                <a href="/" className={styles["nav-link"]}>Black & White</a>
            </li> */}
            <li className={`${styles["nav-item"]}`}>
                <a href="/" className={styles["nav-link"]}>Black & White</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="/colors" className={styles["nav-link"]}>Colors</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="/contact" className={styles["nav-link"]}>Contact</a>
            </li>
            {/* <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                <a href="" className={styles["nav-link"]}>Explore</a>
            </li> */}
        </ul>
        {/* <div className={`flex ${styles["navbar-buttons"]}`}>
            <Button theme="transparent">Login</Button>
            <Button theme="matrix">Sign up</Button>
        </div> */}
        <div className={styles["navbar-responsive-menu"]}>
            <Button theme="transparent">
                <HambergerMenu size="32" color="var(--white-100)"/>
            </Button>
        </div>
    </nav>
  )
}

export default Nav