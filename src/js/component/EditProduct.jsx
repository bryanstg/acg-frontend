import React, { useState } from "react";
import PropTypes from "prop-types";

export const EditProduct = ({ categories, product, edit, setUpdate }) => {
	const API_URI = process.env.API_URI;
	const [categoryId, setCategoryId] = useState("");
	const [categorySelect, setCategorySelect] = useState("");
	const [name, setName] = useState(product.name);
	const [price, setPrice] = useState(product.price);
	const [value, setValue] = useState(product.value);
	const [stock, setStock] = useState(product.stock);
	const [create, setCreate] = useState(false);

	const editProduct = async (name, price, value, stock, categoryId) => {
		const body = {
			name: name,
			category_id: categoryId,
			price: price,
			value: value,
			stock: stock
		};
		const request = await fetch(`${API_URI}/products/${product.id}`, {
			method: "PUT",
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
			edit(false);
			setUpdate(true);
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
						editProduct(name, price, value, stock, categoryId);
					} else {
						alert("Please fill in all the fields");
					}
				}}>{`Edit`}</button>
			<button
				className="add-product__button"
				onClick={async event => {
					const request = await fetch(`${API_URI}/products/${product.id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					if (request.ok) {
						setCreate(false);
						setName("");
						setPrice("");
						setStock("");
						setValue("");
						setCategoryId("");
						setCategorySelect("");
						edit(false);
						setUpdate(true);
						alert("Success");
					}
				}}>
				{`Delete`}
			</button>
		</div>
	);
};

EditProduct.propTypes = {
	categories: PropTypes.array,
	product: PropTypes.object,
	edit: PropTypes.func,
	setUpdate: PropTypes.func
};
