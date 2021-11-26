import React, { useState } from "react";
import PropTypes from "prop-types";

import Arrow from "./../../img/arrow.png";
import { Product } from "./Product.jsx";

export const Category = ({ category, categories, setUpdate }) => {
	const [activeProduct, setActiveProduct] = useState(false);
	return (
		<React.Fragment>
			<div
				className={`category ${activeProduct ? "category-open" : ""}`}
				onClick={() => {
					setActiveProduct(prev => !prev);
				}}>
				<div className="category__info id">{`${category.id}`}</div>
				<span className="category__sep">|</span>
				<div className="category__info name">{`${category.name}`}</div>
				<span className="category__sep">|</span>
				<div className="category__info description">{`${category.description}`}</div>
				<button className="category__button" style={{ backgroundImage: `url(${Arrow})` }} />
			</div>
			{activeProduct && (
				<div className={`${activeProduct ? "product-open product-box" : "product-box"}`}>
					<div className={"product"}>
						<div className="product__info p-id">{`ID`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-date">{`Fecha de creación`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-name">{`Nombre`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-category">{`Categoría`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-price">{`Precio`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-value">{`Valor`}</div>
						<span className="product__sep">|</span>
						<div className="product__info p-stock">{`Stock`}</div>
					</div>
					{category.products.map(product => {
						return (
							<Product
								product={product}
								category={category}
								categories={categories}
								key={product.id}
								setUpdate={setUpdate}
							/>
						);
					})}
				</div>
			)}
		</React.Fragment>
	);
};

Category.propTypes = {
	category: PropTypes.object,
	categories: PropTypes.array,
	setUpdate: PropTypes.func
};
