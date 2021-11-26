import React, { useState } from "react";
import { Loading } from "./Loading.jsx";

export const AddCategory = ({}) => {
	const API_URI = process.env.API_URI;
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [create, setCreate] = useState(false);

	const createCategory = async (name, description) => {
		const body = {
			name: name,
			description: description
		};
		const request = await fetch(`${API_URI}/categories`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		setCreate(true);
		if (request.ok) {
			alert("Succesfully created");
			setCreate(false);
			setName("");
			setDescription("");
		} else {
			alert("Something Happended please try again");
		}
	};
	return (
		<>
			{create ? (
				<Loading />
			) : (
				<div className="add-category">
					<div className="add-category__inputs">
						<div className="add-category__inputs--input">
							<label htmlFor="add-category-name">{`Name`}</label>
							<input
								id="add-category-name"
								onChange={event => setName(event.target.value)}
								value={name}
								type="text"
							/>
						</div>
						<div className="add-category__inputs--input">
							<label htmlFor="add-category-description">{`Description`}</label>
							<input
								id="add-category-description"
								onChange={event => setDescription(event.target.value)}
								value={description}
								type="text"
							/>
						</div>
					</div>
					<button
						className="add-category__button"
						onClick={event => {
							if (name != "" || description != "") {
								createCategory(name, description);
							} else {
								alert("Please fill in all the fields");
							}
						}}>
						{`Create`}
					</button>
				</div>
			)}
		</>
	);
};
