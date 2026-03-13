import React from 'react'
import "./footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_box">
                    <form className="footer_form">
                        <input type="text" className="footer_form_input" placeholder='First Name' />
                        <input type="text" className="footer_form_input" placeholder='Last Name' />
                        <input type="text" className="footer_form_input" placeholder='Email address' />
                        <button className="footer_form_btn">SUBMIT</button>
                    </form>
                    <div className="footer_right">
                        <ul className="footer_list">
                            <li><h2 className="footer_title">CONTACT</h2></li>
                            <div className="footer_listt">
                                <li><a href="#!" className="footer_list_link">998 98 888 98 98</a></li>
                                <li><a href="#!" className="footer_list_link">porshe@gmail.com</a></li>
                                <li><a href="#!" className="footer_list_link">zipcode 32323232</a></li>
                            </div>

                        </ul>
                        <ul className="footer_list">
                            <li><h2 className="footer_title">SOCIAL</h2></li>
                            <div className="footer_listt">
                                <li><a href="#!" className="footer_list_link">Instagram<FaInstagram /></a></li>
                                <li><a href="#!" className="footer_list_link">Facebook<FaFacebook /></a></li>
                                <li><a href="#!" className="footer_list_link">Telegram<FaTelegram /></a></li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer