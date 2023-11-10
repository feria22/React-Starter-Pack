import * as commonStyles from "../../assets/styles/common.module.scss";
import * as styles from "./header.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

function Header() {
  return (
    <header className={styles.header}>
      <div className={commonStyles.container}>
        <nav className={styles.content}>
          <NavLink to="/">
            <span>Logo</span>
          </NavLink>

          <div className={styles.right}>
            {ROUTES.map(route=><NavLink key={route.link} to={route.link}>{route.title}</NavLink>)}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
