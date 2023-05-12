import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {  FaBars, FaHome, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage,MdProductionQuantityLimits } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import {  AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../../assets/styles/PageSidebar.css'
import SideBarMenu from "./SideBarMenu";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path:"/products",
    name:"Products",
    icon:<MdProductionQuantityLimits/>
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
     
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
      
    // ],
  },
  {
    path: "/profile",
    name: "Profile ",
    icon: <FaUser />,
  },

];
function PageSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? "200px" : "35px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        
        }}
          className={`sidebar`}
        >
          <div className="top_section">
            {isOpen && <motion.h1 
             initial="hidden"
             animate="show"
             exit="hidden"
             variants={showAnimation}
            
            className="logo">Admin Panel</motion.h1>}
            <div className="bars">
              <FaBars size={20} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch size={14} />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  placeholder="Search...."
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route,index) => {
                if(route.subRoutes){
                    return(
                       <SideBarMenu 
                      setIsOpen={setIsOpen}
                       route={route}
                       showAnimation={showAnimation}
                       isOpen={isOpen}/>
                    )
                }
              return (
                <>
                  <NavLink activeClassName="active" to={route.path} key={index} className="link">
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          variants={showAnimation}
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                </>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default PageSidebar;
