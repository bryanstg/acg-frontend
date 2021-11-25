import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "./../../img/search.png";

export const ActionBar = ({ addProductActive }) => {
	const [addNew, setAddNew] = useState(false);
	const [addCategory, setAddCategory] = useState(false);
	const [addProduct, setAddProduct] = useState(false);
	return (
		<React.Fragment>
			<div className="action-bar">
				<button
					onClick={() => {
						setAddNew(prev => !prev);
						if (addNew) {
							addProductActive(false);
							setAddProduct(false);
							setAddCategory(false);
						}
					}}
					className="action-bar__add">
					{"Add New"}
				</button>
				<div className="action-bar__search">
					<label className="action-bar__search--icon" htmlFor="search">
						<img src={Search} alt="search" width="16" />
					</label>
					<input id="search" type="text" className="action-bar__search--input" placeholder="Search..." />
				</div>
			</div>
			{addNew && (
				<div className="add">
					<button
						onClick={() => {
							if (addCategory) {
								addProductActive(false);
								setAddNew(false);
								setAddProduct(false);
							} else {
								addProductActive(true);
								setAddProduct(false);
							}
							setAddCategory(prev => !prev);
						}}
						className="add__category">
						{addCategory && addProduct == false ? "Go Back" : "Add Category"}
					</button>
					<button
						onClick={() => {
							if (addProduct) {
								addProductActive(false);
								setAddNew(false);
								setAddCategory(false);
							} else {
								addProductActive(true);
								setAddCategory(false);
							}
							setAddProduct(prev => !prev);
						}}
						className="add__product">
						{addProduct && addCategory == false ? "Go back" : "Add Product"}
					</button>
				</div>
			)}
		</React.Fragment>
	);
};

ActionBar.propTypes = {
	addProductActive: PropTypes.func
};
