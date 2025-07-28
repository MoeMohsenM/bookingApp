import React from "react";
import Styles from "../styles/Navbar.module.scss";
import { MdHotel } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { MdLocalTaxi } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={Styles.nav}>
        <div className={Styles.upper__section}>
            <Link to="/login">Login </Link>
            <Link to="/register">Sign up </Link>
        </div>
      <ul className={Styles.nav__icons}>
        <li>
          <Link to="/hotels">
            <MdHotel size={24} />
            <p>HOTEL</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IoHomeSharp size={24} />
            <p>VILLA</p>
          </Link>
        </li>
        <li>
          <Link to="/taxis">
            <MdLocalTaxi size={24}/>
            <p>TAXI</p>
          </Link>
        </li>
        <li>
          <Link to="/flights">
            <GiAirplaneDeparture size={24}/>
            <p>FLIGHTS</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
