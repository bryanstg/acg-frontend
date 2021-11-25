import React from "react";
import PropTypes from "prop-types";

export const Product = ({ product, categoryName }) => {
	const date = product.creation_date.split(" ");
	console.log(date);
	return (
		<div className="product">
			<div className="product__info p-id">{`${product.id}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-date">{`${date[1]} ${date[2]} ${date[3]}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-name">{`${product.name}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-category">{`${categoryName}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-price">{`${product.price}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-value">{`${product.value}`}</div>
			<span className="product__sep">|</span>
			<div className="product__info p-stock">{`${product.stock}`}</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.object,
	categoryName: PropTypes.string
};
