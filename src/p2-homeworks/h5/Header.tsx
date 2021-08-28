import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import c from "./Header.module.css"

function Header() {

    return (
        <div className={c.menu}>

                <div className={c.menu__item}><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>
                <div className={c.menu__item}><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                <div className={c.menu__item}><NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></div>
                <div className={c.menu_btn}>Menu</div>
        </div>
    )
}

export default Header
