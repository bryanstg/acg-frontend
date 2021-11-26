import React, { useState } from "react";
import PropTypes from "prop-types";
import { EditProduct } from "./EditProduct.jsx";

export const Product = ({ product, category, categories, setUpdate }) => {
	const date = product.creation_date.split(" ");
	const [edit, setEdit] = useState(false);

	return (
		<React.Fragment>
			<div
				className={"product"}
				onClick={() => {
					setEdit(prev => !prev);
				}}>
				<div className="product__info p-id">{`${product.id}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-date">{`${date[1]} ${date[2]} ${date[3]}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-name">{`${product.name}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-category">{`${category.name}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-price">{`${product.price}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-value">{`${product.value}`}</div>
				<span className="product__sep">|</span>
				<div className="product__info p-stock">{`${product.stock}`}</div>
			</div>
			{edit && <EditProduct categories={categories} product={product} edit={setEdit} setUpdate={setUpdate} />}
		</React.Fragment>
	);
};

Product.propTypes = {
	product: PropTypes.object,
	category: PropTypes.object,
	categories: PropTypes.array,
	setUpdate: PropTypes.func
};
