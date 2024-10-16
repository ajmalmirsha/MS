"use client";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import style from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={style.navContainer}>
      <nav>
        <Image alt="logo" src={Logo} />
        <ul className={style.navItemsWrapper}>
          <li>About Us</li>
          <li>How We Help</li>
          <li>Pricing</li>
          <li>Portfolios</li>
          <li>Testimonials</li>
          <li>Insights</li>
        </ul>
        <div className={style.btnWrapper}>
          <button className={style.ContactBtn}>Contact Us</button>
          {menu ? (
            <div onClick={() => setMenu(false)} className={style.closeIcon}>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div onClick={() => setMenu(true)} className={style.hamBurger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </nav>
      {menu && (
        <div className={style.menuWrapper}>
          <li>About Us</li>
          <li>How We Help</li>
          <li>Pricing</li>
          <li>Portfolios</li>
          <li>Testimonials</li>
          <li>Insights</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
