import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { logo } from "../Images/naviconblack.svg";
import { useState } from "react";

function Header() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className={styles.section}>
      <img
        className={styles.img}
        src="https://github.com/hannattaylor/Timer-app/blob/main/poster.png?raw=true"
        alt="picture of logo"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      />
      {/* <img
        className={styles.img}
        src="../Images/naviconblack.svg"
        alt="picture of logo"
      /> */}
      {toggleDropdown ? (
        <section onClick={() => setToggleDropdown(false)}>
          <Link to="/analog">Analog timer</Link>
          <Link to="/digital">Digital timer</Link>
          <Link to="/visuell">Visuell timer</Link>
        </section>
      ) : (
        <section></section>
      )}
    </nav>
  );
}

export default Header;
