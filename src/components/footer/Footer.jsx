import React from 'react'
import "./footer.scss"
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
                            <li><a href="" className="footer_list_link">998 98 888 98 98</a></li>
                            <li><a href="" className="footer_list_link">porshe@gmail.com</a></li>
                            <li><a href="" className="footer_list_link">zipcode 32323232</a></li>
                        </ul>
                        <ul className="footer_list">
                            <li><h2 className="footer_title">SOCIAL</h2></li>
                            <li><a href="" className="footer_list_link">Instagram</a></li>
                            <li><a href="" className="footer_list_link">Facebook</a></li>
                            <li><a href="" className="footer_list_link">Telegram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer