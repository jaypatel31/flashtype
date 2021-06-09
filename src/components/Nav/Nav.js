import React from 'react'
import "./Nav.css";
import logo from "../../assets/logo.png";

function Nav() {
	return (
		<div className="nav-container">
			<div className="nav-left">
				<img className="flash-logo" src={logo} alt="logo"/>
				<p className="flash-logo-text">FlashType</p>
			</div>
			<div className="nav-right">
				<a target="_blank" className="nav-profile-link" href="http://github.com/jaypatel31" rel="noreferrer">
					JP
				</a>
			</div>
		</div>
	)
}

export default Nav