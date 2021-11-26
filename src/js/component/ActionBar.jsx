import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "./../../img/search.png";

export const ActionBar = ({
	addProductActive,
	setAddType,
	categories,
	setEditCategory,
	editCategory,
	setCategoryToUpdate
}) => {
	const [addNew, setAddNew] = useState(false);
	const [addCategory, setAddCategory] = useState(false);
	const [addProduct, setAddProduct] = useState(false);

	const handleCategory = id => {
		for (const category of categories) {
			console.log(category);
			if (category.id == id) {
				setCategoryToUpdate(category);
				setEditCategory(false);
			}
		}
	};

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
				<button
					onClick={() => {
						setEditCategory(true);
						if (editCategory) {
							setCategoryToUpdate(undefined);
						}
					}}
					className="action-bar__add">
					{"Edit Category"}
				</button>
			</div>
			{addNew && (
				<div className="add">
					<button
						onClick={() => {
							if (addCategory) {
								addProductActive(false);
								setAddNew(false);
								setAddProduct(false);
								setAddType(null);
							} else {
								addProductActive(true);
								setAddProduct(false);
								setAddType(2);
							}
							setEditCategory(false);
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
								setAddType(null);
							} else {
								addProductActive(true);
								setAddCategory(false);
								setAddType(1);
							}
							setEditCategory(false);
							setAddProduct(prev => !prev);
						}}
						className="add__product">
						{addProduct && addCategory == false ? "Go back" : "Add Product"}
					</button>
				</div>
			)}
			{editCategory && (
				<div className="change">
					<div className="add-categories__select">
						<label htmlFor="categories-aval">{`Category`}</label>
						<select
							onClick={event => {
								handleCategory(event.target.value);
							}}
							id="categories-aval"
							type="text"
							className="category__select">
							<option className="category__select--option" defaultValue value={""}>
								{`Select a category`}
							</option>
							{categories &&
								categories.map(category => {
									return (
										<option
											className="category__select--option"
											value={category.id}
											key={category.id}>
											{`${category.name}`}
										</option>
									);
								})}
						</select>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

ActionBar.propTypes = {
	addProductActive: PropTypes.func,
	setAddType: PropTypes.func,
	setEditCategory: PropTypes.func,
	editCategory: PropTypes.bool,
	categories: PropTypes.array,
	setCategoryToUpdate: PropTypes.func
};
