import React,{useState} from 'react';

const Navbar = () => {
	const [LogedIn, setLogedIn] = useState(false)
	return(
		<>
		<div className="main-container">
		{!LogedIn ? <>
			<div className="main-menu">
			<div className="logo">
				<h1>Shahab</h1>
			</div>
			<ul className="menu">
				<li>Home</li>
				<li>About me</li>
				<li>My Skills</li>
			</ul>
			</div>
		</>:<>
		<div className="main-menu">
			<div className="logo">
				<h1>Shahab</h1>
			</div>
			<ul className="menu">
				<li>Home</li>
				<li>About me</li>
				<li>Contact me</li>
				<li>Book a tour</li>
			</ul>
			</div>
		</>}
			<div className="btn">
				<input type="submit"
				value={LogedIn ? 'Signout' : 'Login'} onClick={() =>
				setLogedIn(!LogedIn)} />
			</div>
		</div>
		</>
	)

}
export default Navbar