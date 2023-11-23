import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [inputText, setInputText] = useState([]);

	

	return (
		<>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">Full Name</label>
				<input 
					onChange={(e)=> setFullName(e.target.value)} 
					value={fullName}
					type="text" 
					className="form-control" 
					id="fullName" 
					placeholder="Enter your full name" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email address</label>
				<input 
					onChange={(e)=> setEmail(e.target.value)} 
					value={email}
					type="text" 
					className="form-control" 
					id="email" 
					placeholder="Enter your email" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input 
					onChange={(e)=> setPhone(e.target.value)} 
					value={phone}
					type="text" 
					className="form-control" 
					id="phone" 
					placeholder="Enter your phone number" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input 
					onChange={(e)=> setAddress(e.target.value)} 
					value={address}
					type="text" 
					className="form-control" 
					id="address" 
					placeholder="Enter your address" 
				/>
			</div>
			<button 
				onClick={() => {
					setInputText(inputText.concat({ fullName, email, phone, address }));
					setFullName("");
					setEmail("");
					setPhone("");
					setAddress("");
				}} 
				type="button" 
				className="btn btn-primary"
			>
				Save
			</button>
		</>
	);
};

