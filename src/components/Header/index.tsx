

import React, { useState, useContext } from "react";
import "./index.css";
import { BsDiscord, BsTwitter } from "react-icons/bs";


import {Link} from "react-router-dom"

const Navbar = () => {
	
	const [open, setOpen] = useState(false);
	return (
		<header className="header_container">
			<nav className="navigation">
				<Link to={"/"}>
					<img src="./sociallocket.png" alt="logo" height={80} width={110} />
					{/* <h1>SocialLocket Marketplace</h1> */}
				</Link>
			</nav>
			
		

			<div className="right_container">
			
			<div className="sub_right_container">

		
				
					<button>connect wallet</button>
			

				<div
					onClick={() => {
						setOpen(!open);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					{open && (
						<ul>
							<li className="text">
								<BsDiscord />
								<span>Discord</span>
							</li>
							<li className="text">
								<BsTwitter />
								<span>Twitter</span>
							</li>
						</ul>
					)}
				</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
