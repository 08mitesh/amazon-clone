import React from 'react'
import logo from './amazon.jpg'
import SearchIcon from '@material-ui/icons/Search';
import './css/Header.css'


function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="" />

            <div className="header__search" className="header__searchInput"></div>
            <div className="nav__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest 
                    </span>
                    <span className ="header__optionLineTwo">
                        Sign in 
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Retunrs 
                    </span>
                    <span className ="header__optionLineTwo">
                        & orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">

                    </span>
                    <span className ="header__optionLineTwo">
                        prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
