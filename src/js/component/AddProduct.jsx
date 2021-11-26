import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddProduct = ({ categories }) => {
	const API_URI = process.env.API_URI;
	const [categoryId, setCategoryId] = useState("");
	const [categorySelect, setCategorySelect] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [value, setValue] = useState("");
	const [stock, setStock] = useState("");
	const [create, setCreate] = useState(false);

	const createProduct = async (name, price, value, stock, categoryId) => {
		const body = {
			name: name,
			category_id: categoryId,
			price: price,
			value: value,
			stock: stock
		};
		const request = await fetch(`${API_URI}/products`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		setCreate(true);
		if (request.ok) {
			alert("Succesfully created");
			setCreate(false);
			setName("");
			setPrice("");
			setStock("");
			setValue("");
			setCategoryId("");
			setCategorySelect("");
		} else {
			alert("Something Happended please try again");
		}
	};

	return (
		<div className="add-product">
			<div className="add-product__inputs">
				<div className="add-product__inputs--input">
					<label htmlFor="add-product-name">{`Name`}</label>
					<input
						id="add-product-name"
						onChange={event => setName(event.target.value)}
						value={name}
						type="text"
					/>
				</div>
				<div className="add-product__select">
					<label htmlFor="categories-aval">{`Category`}</label>
					<select
						onClick={event => setCategoryId(event.target.value)}
						id="categories-aval"
						type="text"
						className="category__select">
						<option className="category__select--option" defaultValue value={categorySelect}>
							{`Select a category`}
						</option>
						{categories &&
							categories.map(category => {
								return (
									<option className="category__select--option" value={category.id} key={category.id}>
										{`${category.name}`}
									</option>
								);
							})}
					</select>
				</div>
				<div className="add-product__inputs--input">
					<label htmlFor="add-product-price">{`Price`}</label>
					<input
						id="add-product-price"
						onChange={event => setPrice(event.target.value)}
						value={price}
						type="text"
					/>
				</div>
				<div className="add-product__inputs--input">
					<label htmlFor="add-product-value">{`Value`}</label>
					<input
						id="add-product-value"
						onChange={event => setValue(event.target.value)}
						value={value}
						type="text"
					/>
				</div>
				<div className="add-product__inputs--input">
					<label htmlFor="add-product-stock">{`Stock`}</label>
					<input
						id="add-product-stock"
						onChange={event => setStock(event.target.value)}
						value={stock}
						type="text"
					/>
				</div>
			</div>
			<button
				className="add-product__button"
				onClick={event => {
					if (name != "" || price != "" || categoryId != "" || stock != "" || price != "") {
						createProduct(name, price, value, stock, categoryId);
					} else {
						alert("Please fill in all the fields");
					}
				}}>{`Create`}</button>
		</div>
	);
};

AddProduct.propTypes = {
	categories: PropTypes.array
};
