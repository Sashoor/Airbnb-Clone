import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";



// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Header() {
  return (
    <div className="header">
      <Link to='/'>
      <img
        className="header__icon"
        src="https://img.pngio.com/airbnb-logo-transparent-png-stickpng-airbnb-png-logo-400_400.png"
        alt=""
      />
      </Link>
     

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
    <div className="header__right">
    <p>Become a host</p>
    <LanguageIcon />
    <ExpandMoreIcon />
    <Avatar />
       </div>
    </div>
  );
}

export default Header;
