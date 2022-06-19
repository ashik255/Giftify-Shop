import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import "./Navigation.css";
import { pink } from "@mui/material/colors";

const Navigation = () => {
  return (
    <div className="text-center">
      <div className="pt-4">
        <Link style={{ textDecoration: "none", paddingRight:'10px', color:'black' }} to="/home">
          HOME
        </Link>
        <Link style={{ textDecoration: "none", paddingRight:'10px', color:'black' }} to="/shop">
          SHOP
        </Link>
        <Link style={{ textDecoration: "none", paddingRight:'10px',color:'black' }} to="/aura">
          AURA
        </Link>
        <Link style={{ textDecoration: "none", paddingRight:'10px', color:'black' }} to="/blog">
          BLOG
        </Link>
        <Link style={{ textDecoration: "none", paddingRight:'10px', color:'black' }} to="/partners">
          OUR PARTNERS
        </Link>
        <Link style={{ textDecoration: "none", paddingRight:'10px', color:'black' }} to="/about">
          ABOUT US
        </Link>
        <Link style={{paddingRight:'10px'}}><AccountCircleIcon sx={{ color: pink[500] }}/></Link>
        <Link style={{paddingRight:'10px'}}><FavoriteIcon sx={{ color: pink[500] }}/></Link>
        <Link style={{paddingRight:'10px'}}><LocalMallIcon sx={{ color: pink[500] }}/></Link>
        <Link style={{paddingRight:'10px'}}><SearchIcon sx={{ color: pink[500] }}/></Link>
      </div>
    </div>
  );
};

export default Navigation;
