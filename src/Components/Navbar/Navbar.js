import React from 'react';
import { FaSearch } from "react-icons/fa";
import {BsChatDots,BsCardList} from "react-icons/bs";
import {MdOutlineNotificationsActive} from "react-icons/md";
import '../../assets/css/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <>
           <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineNotificationsActive className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <BsChatDots className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <BsCardList className="icon" />
          </div>
          <div className="item">
            <Link to='/profile'>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default Navbar;