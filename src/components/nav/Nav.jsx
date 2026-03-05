import React, { useState } from 'react'
import "./nav.scss"
import { FaHome } from 'react-icons/fa'
import { TbCategory } from 'react-icons/tb'
import { LuContactRound } from 'react-icons/lu'
import { FcAbout } from 'react-icons/fc'
import { LiaBookmarkSolid } from 'react-icons/lia'
// import React, { useState } from 'react'




const Nav = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav_box">
                    <a href="#!" className="nav_logo">
                        <img src="/public/logo.svg" alt="" />
                    </a>

                    <ul className="nav_list">
                        <li><a href="#!" className="nav_link">HOME PAGE</a></li>
                        <li><a href="#!" className="nav_link">CATEGORY</a></li>
                        <li><a href="#!" className="nav_link">ABOUT US</a></li>
                    </ul>
                </div>
                <div className="nav_mobile">
                    <ul className="nav_mobile_list">

                        {[FaHome, TbCategory, LiaBookmarkSolid, LuContactRound].map((Icon, index) => (
                            <li key={index}>
                                <button
                                    className={`nav_mobile_link ${active === index ? "active" : ""}`}
                                    onClick={() => setActive(index)}
                                >
                                    <Icon />
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Nav